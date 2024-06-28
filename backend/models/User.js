const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
   fullname:{
    type:String,
    require:true,
   },

   email:{
    type:String,
    require:true,
    unique:true
   },

  phoneNumber: {
    type: Number,
    required: true,
    unique:true
  },

   password:{
    type:String,
    require:true,
    minLength: 8 // Enforce a minimum password length for security
   },
    
   date:{
    type:Date,
    default:Date.now
   }
  });

  // Prepend default country code before saving
UserSchema.pre('save', function (next) {
  const defaultCountryCode = "+91"; // Adjust as needed
  if (this.phoneNumber) {
    this.phoneNumber = defaultCountryCode + this.phoneNumber;
  }
  next(); // Move to the next middleware or save the document
});

  module.exports = mongoose.model('user',UserSchema)
