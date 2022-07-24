import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();

const app = express();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

// Routes
app.get('/',(req,res)=>{
    (res.send('Pizzas&Burgers World'))
});

// Creating Port
const PORT = process.env.PORT || 8000;

// listening to PORT
app.listen(PORT,(req,res)=>{
    console.log(`server is listening to the port http://localhost:${PORT}`)
})

