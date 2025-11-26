import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Hello World route
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World from TypeScript API!" });
});

// Server port
const PORT: number = Number(process.env.SERVER_PORT) || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
