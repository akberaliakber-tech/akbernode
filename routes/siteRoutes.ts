import { Router } from 'express';
import * as siteController from '../controllers/siteController.js';

const router: Router = Router();

/**
 * Route: GET /api/careers
 * Description: Fetch and search career records
 * Query Params: ?name=companyName
 */

router.get('/', siteController.getContentById);

export default router;