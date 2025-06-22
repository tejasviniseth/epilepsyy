import mongoose from "mongoose";

export interface IDiaryEntry extends mongoose.Document {
  date: string;
  mood: number;
  energy: number;
  stress: number;
  sleep: number;
  weather: string;
  triggers: string[];
  activities: string[];
  notes: string;
}

const diarySchema = new mongoose.Schema<IDiaryEntry>({
  date: { type: String, required: true },
  mood: Number,
  energy: Number,
  stress: Number,
  sleep: Number,
  weather: String,
  triggers: [String],
  activities: [String],
  notes: String,
});

export default mongoose.model<IDiaryEntry>("DiaryEntry", diarySchema);
