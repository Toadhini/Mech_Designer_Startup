import React, { useState, useEffect } from 'react';
import webSocketService, { MechEvent } from '../services/webSocketService';

export function LiveFeed() {
  const [notifications, setNotifications] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Connect to WebSocket when component mounts
    webSocketService.connect();

    // Handler for incoming WebSocket events
    const handleEvent = (event) => {
      if (event.type === MechEvent.NewMech) {
        // Add new mech notification
        const notification = {
          id: Date.now(),
          message: `${event.username} created "${event.mechName}"`,
          time: new Date().toLocaleTimeString(),
        };
        setNotifications((prev) => [notification, ...prev].slice(0, 5)); // Keep last 5
      } else if (event.type === MechEvent.System) {
        // Update connection status
        setIsConnected(event.msg.includes('Connected'));
      }
    };

    webSocketService.addHandler(handleEvent);

    // Cleanup on unmount
    return () => {
      webSocketService.removeHandler(handleEvent);
      webSocketService.disconnect();
    };
  }, []);

  return (
    <div className="live-feed bg-dark text-light p-2 border-top border-secondary">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span className={`badge ${isConnected ? 'bg-success' : 'bg-danger'} me-2`}>
              {isConnected ? 'LIVE' : 'OFFLINE'}
            </span>
            <small className="text-muted">Live Activity Feed</small>
          </div>
          <div className="notifications-scroll d-flex overflow-hidden" style={{ maxWidth: '70%' }}>
            {notifications.length === 0 ? (
              <small className="text-muted">Waiting for activity...</small>
            ) : (
              notifications.map((n) => (
                <span key={n.id} className="badge bg-primary me-2 text-truncate">
                  {n.message}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
