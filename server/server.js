const express = require("express");
require("./database/db");
const mongoose = require('mongoose');
const model = require("./models/userModel");
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3000;

// activating body parser
app.use(bodyParser.urlencoded({ extended: true }));



// Serve index.html directly for the root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'index.html'));
});



// handling a form submission
app.post("/", async (req, res) => {
  try {
    newModel = new model({
      id: req.body.id,
    //   name: req.body.name,  
      email: req.body.email,
      password: req.body.password,
    });
    await newModel.save();
    res.status(201).json({ message: 'User registered successfully' });
    
    // res.redirect('/')
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
        // Handle Mongoose validation error
        
        return res.status(400).json({ error: error.message });
      }
  
      // Handle other types of errors
      console.error(error);
      
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

//  CRUD operations is in modelController


// this console.log
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} , ${__dirname} `);
});
