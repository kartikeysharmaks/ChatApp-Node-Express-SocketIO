# How to install and run this project?

Clone this git repository on your device.\
Then open the project folder on Code Editor(VS Code).\
Run this command to install all the dependencies inside the project - npm install.\
Now to run the project use command - node index.js.

### Cors configuration for running  on local device, update this\ 

```const corsOptions = {
    origin: "https://chat-app-react-socket-io-tailwind-css.vercel.app",
    credentials: true,
};
app.use(cors(corsOptions));
const socketIO = require("socket.io")(http, {
  cors :{
    origin : "https://chat-app-react-socket-io-tailwind-css.vercel.app"
  }
});```

with\

```app.use(cors());
const socketIO = require("socket.io")(http, {
  cors :{
    origin : "http://localhost:3000/"
  }
});```

## NOTE : Keep both projects running simultaneously
Link for frontend Git Repo - [https://github.com/kartikeysharmaks/ChatApp-React-SocketIO-TailwindCSS](https://github.com/kartikeysharmaks/ChatApp-React-SocketIO-TailwindCSS)
