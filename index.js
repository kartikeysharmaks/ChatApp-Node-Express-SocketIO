//Setting up the project
const express = require("express");
const app = express();
const PORT = 4000;
const http = require("http").Server(app);
const cors = require("cors");

const corsOptions = {
  origin: "https://chat-app-react-socket-io-tailwind-css.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cors());
const socketIO = require("socket.io")(http, {
  cors :{
    origin : "https://chat-app-react-socket-io-tailwind-css.vercel.app"
  }
});

//Initially we have zero users
let users = [];

//socket.io connection
socketIO.on('connection', (socket) => {
  console.log(`${socket.id} user just connected!`);

  //Listens for message and emit to other user
  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
  });
  
  //Listens when user is typing
  socket.on('typing', (data) => socketIO.emit('typingResponse', data));

  //Listens when a new user joins the server
  socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);
    socketIO.emit('newUserResponse', users);
  });
  
  //Listens when a user disconnect
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
