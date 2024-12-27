import mongoose from 'mongoose';
import { tourOptions } from './data.js';  // Correct import path with .js extension
import { TourOption } from '../models/tourSchema.js';  // Correct relative path and extension
import dotenv from 'dotenv';
dotenv.config();


const MONGO_URL="mongodb+srv://jayantpaithane111:pt4UoH4AlLRUNAn1@tourwebsite.sdowz.mongodb.net/tourwebsite?retryWrites=true&w=majority"

console.log("Mongo URL ",MONGO_URL)
const insertData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Delete existing data (if needed)
    await TourOption.deleteMany({});
    console.log('Existing data deleted');

    // Insert the new data
    const insertedData = await TourOption.insertMany(tourOptions);
    console.log('Data successfully inserted:', insertedData);
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

// Call the function to insert data
insertData();
