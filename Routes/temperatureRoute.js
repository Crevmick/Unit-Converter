import express from 'express';

import {covertFromFahrenheit, covertFromKelvin} from '../Controllers/temperatureController.js';

const router = express.Router();

router.post('/from-fahrenheit', covertFromFahrenheit);
router.post('/from-kelvin', covertFromKelvin);

export default router;
