export {};
import express from 'express';
import type { Request, Response } from 'express';
import { Pool } from 'pg';
import { Item } from './models/Item.js';
import { databaseConfigs } from './db.js';
import cors from 'cors';
import jobRoutes from './routes/jobRoutes.js';  

export const app = express();
app.set("view engine", "ejs");

export const pool = new Pool(databaseConfigs.postgreLocal);

app.use(cors({
  origin: 'https://localhost:5173' 
}));

app.use(express.json());
app.use('/api/jobs', jobRoutes);

