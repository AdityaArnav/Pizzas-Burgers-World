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

// connecting with MongoDB
const connection = async (req,res)=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database Connected');

    }
    catch(err){
        console.log('error occured',err)

    }
}

// Creating Port
const PORT = process.env.PORT || 8000;

// listening to PORT
app.listen(PORT,(req,res)=>{
    connection()
    console.log(`server is listening to the port http://localhost:${PORT}`)
})

