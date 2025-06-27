import { Router } from 'express';
import { getDiameterChartData } from '../controllers/diameterChartController.js'
import { getDiscoveryChartData } from '../controllers/discoveryChartController.js'

const router = Router();
router.get('/diameter-chart', getDiameterChartData);
router.get('/discovery-chart', getDiscoveryChartData);

export default router;