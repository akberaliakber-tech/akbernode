import { Router } from 'express';
import * as careerController from '../controllers/jobController.js';

const router: Router = Router();

/**
 * Route: GET /api/careers
 * Description: Fetch and search career records
 * Query Params: ?name=companyName
 */
router.get('/', careerController.getJobs);
router.post('/', careerController.createJob);


export default router;