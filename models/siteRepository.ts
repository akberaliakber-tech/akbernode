import {pool} from '../app.js';
import { Job } from './job.js';
import { SiteContent } from './siteContents.js';

export const getContentById = async (pageId: number): Promise<SiteContent[]> => {
    const queryText = `
            SELECT 
                id, 
                title, 
                contents, 
                image_url1, 
                image_url2
                FROM site_contents 
            WHERE page_id = $1
            ORDER BY id ASC; 
        `;
    const result = await pool.query(queryText, [pageId]);
    
    // Convert raw rows into instances of your Job class
    return result.rows.map(row => new SiteContent(
                row.id,
                row.title,   
                row.contents, 
                row.image_url1,
                row.image_url2

    ));
};


