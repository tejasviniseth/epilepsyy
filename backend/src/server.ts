import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import diaryRoutes from "./routes/diary";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/diary", diaryRoutes);

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Mongo error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
