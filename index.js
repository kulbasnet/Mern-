const express = require('express');
const dotenv = require('dotenv').config();
const cors  = require('cors');
const {mongoose} = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');



//database Connection
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database  connceted'))
.catch((err)=> console.log('datbase not connected',err));

//middleware

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.use('/', require('./routes/authRoutes'))

// app.use(cookieParser())
// app.use(express.urlencoded({extended:false}))

const port = 8000;

app.listen(port,()=> console.log(`server is runnig on ${port}`));
