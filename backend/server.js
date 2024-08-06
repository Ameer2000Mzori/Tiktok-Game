const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const { WebcastPushConnection } = require("tiktok-live-connector");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST"],
  },
});

// Configure CORS for Express
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.json());

app.post("/addUserName", (req, res) => {
  const tiktokUsername = req.body.name;
  console.log("user name is : ", tiktokUsername);

  // const tiktokUsername = "ewc_en";

  const tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

  tiktokLiveConnection
    .connect()
    .then((state) => {
      console.log(`Connected to roomId ${state.roomId}`);
    })
    .catch((err) => {
      console.error("Failed to connect", err);
    });

  tiktokLiveConnection.on("chat", (data) => {
    console.log(`${data.uniqueId} writes: ${data.comment}`);
    io.emit("chat", data);
  });

  tiktokLiveConnection.on("gift", (data) => {
    console.log(`${data.uniqueId} sends ${data.giftId}`);
    io.emit("gift", data);
  });

  res.status(200).send("Request received");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
