import { useState } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const WebsocketTask: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [timestamp, setTimestamp] = useState<string>('no timestamp yet');

  const subscribeToTimer = (cb: (err: null, timestamp: string) => void) => {
    //socket.on(eventName, listener)
    socket.on('timer', (timestamp) => cb(null, timestamp));
    //socket.emit(eventName, argument)
    socket.emit('subscribeToTimer', 2000);
  };

  const closeConnectionHandler = () => {
    socket.disconnect();
    setIsConnected(false);
  };

  const openConnectionHandler = () => {
    socket.connect();
    subscribeToTimer((err, timestamp: string) => setTimestamp(timestamp));
    setIsConnected(true);
  };

  return (
    <section className="container">
      <h3>WebsocketTask</h3>
      <div>
        <p>This is time stamp from websocket:</p>
        <p>{timestamp}</p>
        <button onClick={closeConnectionHandler} disabled={!isConnected}>
          close websocket
        </button>
        <button onClick={openConnectionHandler} disabled={isConnected}>
          open websocket
        </button>
      </div>
    </section>
  );
};

export default WebsocketTask;
