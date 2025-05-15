// Routes/lengthRoute.js
import express from "express";
import { converFromMilimeter, convertFromcentimeter, convertFrommeter, convertFromdecimeter, convertFromFoot, convertFromInch } from "../Controllers/lengthController.js";

const router = express.Router();

// Define the length conversion route
router.post('/from-mm', converFromMilimeter);
router.post('/from-centimeter', convertFromcentimeter);
router.post('/from-meter', convertFrommeter);
router.post('/from-decimeter', convertFromdecimeter);
router.post('/from-foot', convertFromFoot);
router.post('/from-inch', convertFromInch)
export default router;
