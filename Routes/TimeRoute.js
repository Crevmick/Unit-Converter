
import express from 'express';
import { convertFromSeconds, convertFromHours, convertFromDays} from '../Controllers/timeController.js';

const router = express.Router();


router.post('/from-seconds', convertFromSeconds);
router.post('/from-hours', convertFromHours); 
router.post('/from-days', convertFromDays);

export default router;
