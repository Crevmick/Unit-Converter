import express from 'express';

import {covertFromFahrenheit, covertFromKelvin, covertFromCelsius} from '../Controllers/temperatureController.js';

const router = express.Router();

router.post('/from-fahrenheit', covertFromFahrenheit);
router.post('/from-kelvin', covertFromKelvin);
router.post('/from-Celsius', covertFromCelsius);

export default router;
