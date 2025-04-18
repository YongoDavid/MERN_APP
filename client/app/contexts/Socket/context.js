import { createContext } from 'react';

const SocketContext = createContext({
  socket: null,
  connect: () => {},
  disconnect: () => {}
});

export default SocketContext; 