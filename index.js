import express from 'express';
import mongoose from 'mongoose';
import { TourOption } from './models/tourSchema.js';

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tourwebsite', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Create an endpoint to fetch the tours
app.get('/tour', async (req, res) => {
  try {
    // Fetch all tour options from the database
    const tours = await TourOption.find();
    res.status(200).json(tours);  // Return the tours as a JSON response
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).send('Error fetching tours');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
