
import express from 'express';
<<<<<<< HEAD
import { convertFromSeconds, convertFromHours, convertFromDays} from '../Controllers/timeController.js';
=======
import { convertFromSeconds, convertFromHours, convertFromMinutes} from '../Controllers/timeController.js';
>>>>>>> 168829fc8b404345d95263e3d2b00bab451f813b

const router = express.Router();


router.post('/from-seconds', convertFromSeconds);
<<<<<<< HEAD
router.post('/from-hours', convertFromHours); 
router.post('/from-days', convertFromDays);
=======
router.post('/from-hour', convertFromHours);
router.post('/from-minute', convertFromMinutes);

>>>>>>> 168829fc8b404345d95263e3d2b00bab451f813b

export default router;
