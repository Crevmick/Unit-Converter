// Routes/lengthRoute.js
import express from "express";
import { convertLength } from "../Controllers/lengthController.js";

const router = express.Router();

// Define the length conversion route
router.post('/from-meter', convertLength);

export default router;
