import express from 'express';
import { tourRouter } from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT;
const dbURI = process.env.MONGO_URL 

mongoose
  .connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));


// Middleware
app.use(express.json());

// Use tourRouter for '/tour' endpoint
app.use('/tour', tourRouter);
// Base URL route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Tour API. Use /tour for tour-related operations.');
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
