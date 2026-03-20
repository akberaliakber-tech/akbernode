export {};
import express from 'express';
import { Pool } from 'pg';

import { databaseConfigs } from './db.js';
import cors from 'cors';
import jobRoutes from './routes/jobRoutes.js';  
import siteRoutes from './routes/siteRoutes.js';  

export const app = express();
app.set("view engine", "ejs");

export const pool = new Pool(databaseConfigs.postgreLocal);

app.use(cors({
  origin: 'https://localhost:5173' 
}));

app.use(express.json());
app.use('/api/jobs', jobRoutes);
app.use('/api/site-contents', siteRoutes);

