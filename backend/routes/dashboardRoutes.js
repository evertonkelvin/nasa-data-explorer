import { Router } from 'express';
import { getDiameterChartData } from '../controllers/diameterChartController.js'

const router = Router();
router.get('/diameter-chart', getDiameterChartData);

export default router;