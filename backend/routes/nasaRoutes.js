import { Router } from 'express';
import { getNasaNeoData } from '../controllers/neoController.js'

const router = Router();
router.get('/neo', getNasaNeoData);

export default router;