const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');

const cors = require('cors');


const HealthCheckController = require('./controller/HealthCheckController');
const ElementController = require('./controller/ElementController');
const BoardEvents = require('./service/BoardEvents');
const boardEvents = new BoardEvents();

const corsOptions = {
    origin: '*', // This allows requests from any origin.
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // This allows the specified methods.
    headers: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'], // This allows the specified headers.
  };
  app.use(cors(corsOptions));

// IO.set('origin',":*:");

// const { Server } = io;

const socketIO = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    },
    log:{
        level: 1
    }
});

const PORT = 4000;

  

socketIO.on('connection', (socket) => {
    console.log(`User connected!`)

    socket.on('disconnet', () => {
        console.log(`user disconnected`);
    });

    socket.on("hello", (params, callbackwiki) => {
        console.log(`Hee nhooo hoooo heax ${JSON.stringify(params)}`);
    })

    socket.on("join_board", (params, callback) => {
        const { board_sid, user_sid } = params;        
        boardEvents.joinBoard({ user_sid, board_sid, socket });
    });

    socket.on("add_element", (params, callback) => {
        const { board_sid, user_sid, position } = params;
        boardEvents.addElement({ user_sid, board_sid, position, socket }, callback);
    });
});


app.use(`/hc`, HealthCheckController);
app.use(`/elements`, ElementController);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

