import { Router } from 'express';
import { getDiameterChartData } from '../controllers/diameterChartController.js'
import { getDiscoveryChartData } from '../controllers/discoveryChartController.js'
import { getStatsData } from '../controllers/statsController.js'

const router = Router();
router.get('/diameter-chart', getDiameterChartData);
router.get('/discovery-chart', getDiscoveryChartData);
router.get('/stats', getStatsData);

export default router;