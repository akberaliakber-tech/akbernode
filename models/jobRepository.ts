import {pool} from '../app.js';
import { Job } from './job.js';

export const findByCompany = async (company_name: string, searchType:number): Promise<Job[]> => {
    const result = await pool.query('SELECT * FROM get_jobs_filtered($1, $2)', [company_name, searchType]);
    
    // Convert raw rows into instances of your Job class
    return result.rows.map(row => new Job(
                row.id,
                row.company_name,   
                row.job_title, 
                row.is_active,  
                row.category,
                row.description,
                row.posting_date,
                row.url 
    ));
};
export const insertJob = async (job: any) => {
    const query = `
        INSERT INTO jobs (
            title, description, category, status, company_id, modified_by, created_by
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $6) 
        RETURNING *;
    `;

    const values = [
        job.title,
        job.description,
        job.category,
        job.status,
        job.company_id,
        job.modified_by // Used for both modified_by and created_by on first insert
    ];

    // Using your existing DB pool/client logic
    const { rows } = await pool.query(query, values);
    return rows[0];
};

