import mongoose from 'mongoose';

// Define the schema for TourOption
const tourOptionSchema = new mongoose.Schema({
  tour_id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  pick_up: { type: String, required: true },
  meeting_point: { type: String, required: true },
  drop_off: { type: String, required: true },
  duration: { type: Number, required: true },
  duration_unit: { type: String, required: true },
});

// Create and export the TourOption model
export const TourOption = mongoose.model('TourOption', tourOptionSchema);
