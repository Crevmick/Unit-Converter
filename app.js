import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Config/db.js';
import timeRoutes from './Routes/TimeRoute.js';
import lengthRoute from "./Routes/lengthRoute.js"; 
import temperatureRoute from './Routes/temperatureRoute.js';

dotenv.config();

//Initialling the application 
const app = express();

//connect DB 
connectDB();


//middleware
app.use(express.json()); // for parsing JSON body
app.use(cors())


//Mounting the route
app.use('/api/time', timeRoutes);
app.use('/api/length', lengthRoute); 
app.use('/api/temperature', temperatureRoute);



//Listen to our server
const PORT = process.env.PORT ||3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});


