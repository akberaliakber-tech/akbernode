import type { Request, Response, NextFunction } from 'express';
import * as siteRepository from '../models/siteRepository.js';


export const getContentById = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        // Type-safe query parameter access
        const queryPageId = req.query.pageId as string;
        console.log(`[API] Received request for site content with pageId: ${queryPageId}`);
        const id = queryPageId ? parseInt(queryPageId, 10) : 1;
        console.log(`[API] Received request for site content with pageId: ${id}`);
        // Fetch raw data from the model
        const rows = await siteRepository.getContentById(id);
        console.log(`[API] Success: Found ${rows.length} site contents.`);
        console.log(`[API] Data:`, rows);
        // Explicitly setting status and returning JSON
        res.status(200).json(rows);
    } catch (error) {
        // Pass to global error handler
        next(error);
    }
}


