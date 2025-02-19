import express from 'express'
import dotenv from 'dotenv'
import path from "path"
import { connectDB } from './config/db.js';
import streamerRoutes from './routes/streamerRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/streamers", streamerRoutes);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});