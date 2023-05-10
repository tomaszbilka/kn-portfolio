//to start server: node server
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http');
const server = http.createServer();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  },
});

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const port = 8000;
server.listen(port, () => {
  console.log('listening on port', port);
});
