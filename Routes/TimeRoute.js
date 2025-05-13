
import express from 'express';
import { convertFromSeconds} from '../Controllers/timeController.js';

const router = express.Router();


router.post('/from-seconds', convertFromSeconds);



export default router;
