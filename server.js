const express = require('express');
const connectDB = require('./config/connectDB');
const authRouter = require('./routers/auth');
const foodRouter = require('./routers/foods');
const cartRouter = require('./routers/cart');
const orderRouter = require('./routers/order');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET","POST","PUT"]
    }
});
const port = 5000 || process.env.PORT;
connectDB();
app.use(express.json());
app.use(cors());
app.use(express.static('./uploads'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', authRouter);
app.use('/api/foods', foodRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', orderRouter);

io.on('connection', (socket) => {
    console.log('a userSocket is connected');
    socket.on('diconnect', () => {
        console.log('User is disconnected');
    })
    socket.on('addd', (order) => {
        console.log('order :' + order);
    })
});

server.listen(port, (err) => {
    if (err) {
        console.log('server is not running');
    } else {
        console.log(`server is running on port ${port}...`);
    }
});





module.exports = server;