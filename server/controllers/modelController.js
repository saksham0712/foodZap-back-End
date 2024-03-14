const { default: mongoose } = require("mongoose");
const model = require("../models/userModel");
const mongoose = require(mongoose);
const db = mongoose.connection;

// crud operations 

// lets try to delete
exports.deleteModel = async (req, res) => {
    try {
        const product = await model.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({message: 'model not found so i cant be deleted'})
        }
        res.status(200).json({message: 'model is deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Reterieve the data 
exports.getModelById = async (req, res) => {
    try {
        const Model = await model.findById(req.params.id);
        if (!Model) {
          return res.status(404).json({ message: 'model not found reterieve' });
        }
        res.status(200).json(Model);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}

// find an data
exports.findById = async (req, res) => {
  try {
    const found = await model.findById(req.params.id);
    if(!found) {
        return res.status(404).json({ message: 'model not found' });
    }
    res.status(200).json(found);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}
