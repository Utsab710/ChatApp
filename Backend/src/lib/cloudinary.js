// cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables with explicit path to .env
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Log configuration status (without exposing actual values)
console.log("Cloudinary Configuration Status:");
console.log(
  "CLOUD_NAME:",
  process.env.CLOUDINARY_CLOUD_NAME ? "✓ Loaded" : "✗ Missing"
);
console.log(
  "API_KEY:",
  process.env.CLOUDINARY_API_KEY ? "✓ Loaded" : "✗ Missing"
);
console.log(
  "API_SECRET:",
  process.env.CLOUDINARY_API_SECRET ? "✓ Loaded" : "✗ Missing"
);

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
