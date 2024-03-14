const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

// defining here a schema

const modelSchema = new mongoose.Schema({

  serialNumber: {
    type: Number,
    required: true,
  },

  Name: {
    type: String,
    required: true,
  },

  emailID: {
    type: String,
    required: true,
  },

  phoneNum: {
    type: Number,
    required: true,
    unique: true,
  },

  collage: {
    type: String,
    required: false,
  },

  branch: {
    type: String,
    required: false,
  },

  DOB: {
    type: String,
    required: true,
  },

  typeOfUser: {
    type: String,
    required: false,
  },

  batch: {
    type: Number,
    required: false,
  },

  profilePicture: {
    type: String,
    required: false,
  },
  payment: {
   type: Boolean,
   required: false,
 },
 Password: {
   type: String,
   required: true,
 },
 email: {
   type: String,
   required: true,
 },
 orderRelated: {
   type: String,
   required: true,
 },
 ralatedToPayments: {
   type: String,
   required: false,
 },
 relatedToGroups: {
   type: String,
   required: false,
 },
 'user in negative list': {
   type: String,
   required: false,
 },
 'canteens/restaurant in negative list': {
   type: String,
   required: false,
 },
 'prepaid order limit': {
   type: String,
   required: false,
 },
 'unsecured order limit': {
   type: String,
   required: false,
 },
 'wallet balance': {
   type: Number,
   required: false,
 },
 'profile status': {
   type: String,
   required: false,
 },
 'Past order history': {
   type: Object,
   required: false,
 },
 'Transaction history': {
   type: Object,
   required: false,
 },
 
 'Current orders': {
   type: Object,
   required: false,
 },
 
 'past events': {
   type: Object,
   required: false,
 },
 
 'received msg': {
   type: Object,
   required: false,
 },
 
 'sent msg': {
   type: Object,
   required: false,
 },
 
 'draft messages': {
   type: Object,
   required: false,
 },
 
 'system notifications': {
   type: Object,
   required: false,
 }
});

// compile model for the schema
const model = mongoose.model("model", modelSchema);
module.exports = model;
