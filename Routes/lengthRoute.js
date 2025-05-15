// Routes/lengthRoute.js
import express from "express";
import { convertLength, convertFromcentimeter, } from "../Controllers/lengthController.js"; 

// import { convertLength } from "../Controllers/lengthController.js";
import {convertLength, convertFrommeter } from "../Controllers/lengthController.js";
const router = express.Router();

// Define the length conversion route
router.post('/from-mm', convertLength);
router.post('/from-centimeter', convertFromcentimeter);
export default router;
