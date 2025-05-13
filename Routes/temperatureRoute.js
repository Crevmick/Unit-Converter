import express from 'express';

import {convertFromFahrenheit, convertFromKelvin, convertFromCelsius} from '../Controllers/temperatureController.js';

const router = express.Router();

router.post('/from-fahrenheit', convertFromFahrenheit);
router.post('/from-kelvin', convertFromKelvin);
router.post('/from-Celsius', convertFromCelsius);

export default router;
