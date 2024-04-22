import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static(path.join(__dirname, "public")));
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
