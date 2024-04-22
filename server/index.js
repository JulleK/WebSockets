const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log(`new message: ${message}`);
    io.emmit("message", `${socket.id.slice(0, 2)} said ${message}`);
  });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
