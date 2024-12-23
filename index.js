import express from 'express';
const app = express();
import mongoose from 'mongoose';

const port = 3000;


mongoose.connect('mongodb://127.0.0.1:27017/travelWebsite')
  .then(() => console.log('Connected to MongoDB!'));

app.get("/", (req, res)=>{
    res.send("Testing  the universal path")
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})