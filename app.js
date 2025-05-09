import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

//Initialling the application 
const app = express();

//Listen to our server
const PORT = process.env.PORT ||3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});


