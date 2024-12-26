# TOUR WEBSITE BACKEND 

## Steps to run application

### Follow the commands :
cd init  
node init.js  #To populate database with test data
cd..
npm start  #To start server
api : http://localhost:3000/tour/  #To call api
 

## Folder Structure

## init 
Contains files responsible for initializing or populating the database with initial data.

data.js
Stores predefined data for tours, locations, or other entities, used for seeding the database.

init.js
Script to initialize the database with the data from data.js. Often run once to populate the database with default or test data. 
## models
Houses the Mongoose schema definitions for the database.

tourSchema.js
Defines the schema for a "Tour" in the database, including fields like title, description, duration, and associated validation rules.

## src
Contains the main application logic and entry points for the backend server.

app.js
Configures the Express application.
Sets up middleware, routes, and any global settings for the server.

index.js
The main entry point of the application.
Starts the server by calling the configured Express app and listening on a specified port.

## .env
Stores environment variables like database connection strings, API keys, and configuration settings.

## package.json
Defines the project dependencies, scripts, metadata, and configurations for your Node.js application.


