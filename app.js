const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors=require('cors');
const app = express();
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(express.urlencoded({extended: true}));
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')




app.use(cors());
app.get('/', (req, res) => {
    res.send("hello world");
})
app.use(cookieParser())

app.use('/users', userRoutes);

app.use('/captain', captainRoutes);


module.exports = app;