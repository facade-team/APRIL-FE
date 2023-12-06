import { io, Socket } from "socket.io-client";

// Declaring socket as a variable that can be undefined
let socket: Socket | undefined = io("http://127.0.0.1:5001");

export const initSocketConnection = (): void => {
  if (!socket) {
    socket = io("http://127.0.0.1:5001");
  } else {
    socket.connect();
  }
  console.log("socket", socket);
};

export const sendSocketMessage = (cmd: string, body: any = null): void => {
  if (!socket || !socket.connected) {
    initSocketConnection();
  } else {
    console.log("cmd", cmd, body);
    socket.emit("chat", {
      cmd,
      body,
    });
  }
};

type Callback = (error: Error | null, ret: any) => void;
const cbMap: Map<string, Callback> = new Map();

export const socketInfoReceived = (cbType: string, cb: Callback): void => {
  cbMap.set(cbType, cb);

  if (socket && socket.hasListeners("chat")) {
    socket.off("chat");
  }

  socket?.on("chat", (ret) => {
    console.log(ret);
    cbMap.forEach((cbValue) => {
      cbValue(null, ret);
    });
  });
};

export const disconnectSocket = (): void => {
  if (!socket || !socket.connected) {
    return;
  }
  socket.disconnect();
  socket = undefined;
};
