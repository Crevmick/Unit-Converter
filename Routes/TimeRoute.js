
import express from 'express';
import { convertFromSeconds, convertFromHours} from '../Controllers/timeController.js';

const router = express.Router();


router.post('/from-seconds', convertFromSeconds);
router.post('/from-hour', convertFromHours);

export default router;
