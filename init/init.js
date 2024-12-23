import mongoose from 'mongoose';
import { tourOptions } from '../init/data';  // Correctly import the tourOptions from data.js
import { TourOption } from '../models/tourSchema';  // Correct path to the schema

const insertData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/tourwebsite', {
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
