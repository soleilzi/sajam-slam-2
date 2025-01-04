import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import streamerRoutes from './routes/streamerRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/streamers", streamerRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});