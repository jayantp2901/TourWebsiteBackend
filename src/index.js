import express from 'express';
import { tourRouter } from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
// Necessary to work with __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;
const dbURI = process.env.MONGO_URL ;


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
  res.sendFile(path.join(__dirname, 'index.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
