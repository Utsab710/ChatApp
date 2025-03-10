import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { dbConnect } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import messageRoutes from "./routes/message.route.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // ✅ Default to 5000 if undefined

console.log("PORT from .env:", PORT); // ✅ Debugging step

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Connect to DB before starting server
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:" + PORT);
  });
});
