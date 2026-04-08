// WebSocket event types for mech notifications
export const MechEvent = {
  NewMech: 'newMech',
  System: 'system',
};

// Singleton class to manage WebSocket connection
class WebSocketService {
  constructor() {
    this.socket = null;
    this.handlers = [];
  }

  // Connect to WebSocket server
  connect() {
    // Prevent duplicate connections
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      return;
    }

    // Determine WebSocket URL based on current protocol (ws or wss)
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const url = `${protocol}://${window.location.host}/ws`;

    this.socket = new WebSocket(url);

    // Handle connection open
    this.socket.onopen = () => {
      console.log('WebSocket connected');
      this.broadcastEvent(MechEvent.System, { msg: 'Connected to live feed' });
    };

    // Handle incoming messages
    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.receiveEvent(data);
      } catch {
        // Handle non-JSON messages
        this.receiveEvent({ type: MechEvent.System, msg: event.data });
      }
    };

    // Handle connection close
    this.socket.onclose = () => {
      console.log('WebSocket disconnected');
      this.broadcastEvent(MechEvent.System, { msg: 'Disconnected from live feed' });
    };

    // Handle errors
    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  // Disconnect from WebSocket server
  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  // Send a message through the WebSocket
  sendEvent(event) {
    console.log('Attempting to send WebSocket event:', event);
    console.log('Socket state:', this.socket?.readyState, '(1 = OPEN)');
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(event));
      console.log('Event sent successfully');
    } else {
      console.warn('WebSocket not connected, event not sent');
    }
  }

  // Add a handler for incoming events
  addHandler(handler) {
    this.handlers.push(handler);
  }

  // Remove a handler
  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  // Receive and distribute event to all handlers
  receiveEvent(event) {
    this.handlers.forEach((handler) => handler(event));
  }

  // Broadcast event locally (for system messages)
  broadcastEvent(type, data) {
    const event = { type, ...data };
    this.receiveEvent(event);
  }
}

// Export singleton instance
const webSocketService = new WebSocketService();
export default webSocketService;
