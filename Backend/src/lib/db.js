import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
// Load environment variables

const dbConnect = async () => {
  if (!process.env.MONGODB_URI) {
    console.error(" Error: MONGODB_URI is undefined. Check your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error(" DB connection error:", error);
    process.exit(1);
  }
};

export { dbConnect };
