import mongoose from "mongoose";

export interface DiaryEntry extends mongoose.Document {
  _id: string;
  date: string;
  mood: number;
  energy: number;
  stress: number;
  sleep: number;
  weather: string;
  triggers: string[];
  activities: string[];
  notes: string;
  hasRecording: boolean;
  recordingUrl?: string;
  recordingDuration?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const diarySchema = new mongoose.Schema<DiaryEntry>(
  {
    date: { type: String, required: true },
    mood: Number,
    energy: Number,
    stress: Number,
    sleep: Number,
    weather: String,
    triggers: [String],
    activities: [String],
    notes: String,

    // 🎤 Voice-specific fields
    hasRecording: { type: Boolean, default: false },
    recordingUrl: String,
    recordingDuration: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<DiaryEntry>("DiaryEntry", diarySchema);