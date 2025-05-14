
import express from 'express';

import { convertFromSeconds, convertFromHours, convertFromMinutes, convertFromDays} from '../Controllers/timeController.js';


const router = express.Router();


router.post('/from-seconds', convertFromSeconds);
router.post('/from-days', convertFromDays);
router.post('/from-hour', convertFromHours);
router.post('/from-minute', convertFromMinutes);



export default router;
