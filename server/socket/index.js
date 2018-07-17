//Exports function that uses the server connection provided and adds on socket events
module.exports = serverWithSocket => {
  serverWithSocket.on("connection", socket => {
    console.log("Socket.id: ", socket.id, "connected to sever");

    socket.on("new-message", message => {
      socket.broadcast.emit("new-message", message);
    });
  });
};
