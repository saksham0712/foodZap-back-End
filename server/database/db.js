const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/foodZap';



mongoose.connect(MONGO_URI)

  .then(() => {
    console.log('Connected to MongoDB ekdam bhadiya se');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  