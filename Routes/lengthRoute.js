// Routes/lengthRoute.js
import express from "express";
import { convertLength, convertFromcentimeter, convertFrommeter, convertFromdecimeter } from "../Controllers/lengthController.js";

const router = express.Router();

// Define the length conversion route
router.post('/from-mm', convertLength);
router.post('/from-centimeter', convertFromcentimeter);
router.post('/from-meter', convertFrommeter);
router.post('/from-decimetre', convertFromdecimeter);
export default router;
