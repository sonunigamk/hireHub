import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Server is working fine",
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
