import express from 'express';
import dotenv from 'dotenv';
import { TourOption } from '../models/tourSchema.js';

dotenv.config();

const tourRouter = express.Router();

// GET: Fetch all tours
tourRouter.get('/', async (req, res) => {
  try {
    const tours = await TourOption.find();
    res.status(200).json(tours);
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).json({ error: 'Error fetching tours' });
  }
});

// POST: Add a new tour
tourRouter.post('/', async (req, res) => {
  try {
    const { tour_id, title, description, pick_up, drop_off, meeting_point, duration, duration_unit } = req.body;

    // Check for missing fields
    if (!title || !description || !pick_up || !drop_off || !meeting_point || !duration || !duration_unit) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new tour
    const newTour = new TourOption({
      tour_id,
      title,
      description,
      pick_up,
      drop_off,
      meeting_point,
      duration,
      duration_unit,
    });

    const savedTour = await newTour.save();
    res.status(201).json({ message: 'Tour Created Successfully', tour: savedTour });
  } catch (error) {
    console.error('Error saving new tour:', error);
    res.status(500).json({ error: 'Error saving new tour' });
    
  }
});

// Export the router
export { tourRouter };
