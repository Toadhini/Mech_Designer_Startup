const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
  // Create a WebSocket server that shares the HTTP server
  const wss = new WebSocketServer({ noServer: true });

  // Handle the upgrade from HTTP to WebSocket
  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  // Keep track of all connected clients
  let connections = [];

  wss.on('connection', (ws) => {
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);
    console.log(`WebSocket client connected. Total connections: ${connections.length}`);

    // Handle incoming messages from clients
    ws.on('message', function message(data) {
      // Broadcast the message to all other connected clients
      connections.forEach((c) => {
        if (c.id !== connection.id) {
          c.ws.send(data);
        }
      });
    });

    // Handle client disconnect
    ws.on('close', () => {
      connections = connections.filter((c) => c.id !== connection.id);
      console.log(`WebSocket client disconnected. Total connections: ${connections.length}`);
    });

    // Respond to pong messages (for keep-alive)
    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  // Periodically ping clients to keep connections alive and remove dead ones
  setInterval(() => {
    connections.forEach((c) => {
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping();
      }
    });
  }, 10000);
}

module.exports = { peerProxy };
