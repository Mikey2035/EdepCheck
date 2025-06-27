import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from './routes/user';
import { router as resultRoutes } from './routes/results';




const app = express();
app.use(cors());
app.use(express.json());

app.use('/', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
app.use('/', resultRoutes);