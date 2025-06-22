import express, { Request, Response } from "express";
import DiaryEntry from "../models/DiaryEntry";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const newEntry = new DiaryEntry(req.body);
    const saved = await newEntry.save();
    console.log("Received:", req.body); 
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: "Failed to save entry" });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const entries = await DiaryEntry.find().sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch entries" });
  }
});

export default router;
