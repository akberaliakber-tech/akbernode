import type { Request, Response, NextFunction } from 'express';
import * as careerRepository from '../models/jobRepository.js';
// import { toCareerDTO } from '../mappers/careerMapper';
// import { CareerDTO } from '../types/career.types'; // Assuming you define your interface here

export const getJobs = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<void> => {
    try {
        // Type-safe query parameter access
        const name = req.query.name as string | undefined;
        const searchType = parseInt(req.query.type as string) || 1;

        // Fetch raw data from the model
        const rows = await careerRepository.findByCompany(name || '', searchType);
        console.log(`[API] Success: Found ${rows.length} jobs.`);
        console.log(`[API] Data:`, rows);   
        // Explicitly setting status and returning JSON
        res.status(200).json(rows);
    } catch (error) {
        // Pass to global error handler
        next(error);
    }
};

export const createJob = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<void> => {
    try {
        // 1. Extract the View Model from the request body
        // In a senior-level app, you would validate this with Zod here
        const jobData = req.body;
        console.log(`[API] Received job creation request:`, jobData);
        console.log(`[API] Attempting to create job:`, jobData.title);

        // 2. Call the repository to perform the PostgreSQL INSERT
        const newJob = await careerRepository.insertJob(jobData);

        // 3. Return 201 Created with the new record (including the new ID)
        console.log(`[API] Success: Job created with ID ${newJob.id}`);
        res.status(201).json(newJob);
        
    } catch (error) {
        console.error(`[API] Error creating job:`, error);
        next(error); // Pass to your global error middleware
    }
};


