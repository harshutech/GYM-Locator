const mongoose = require('mongoose');

const GymOwnerSchema = new Schema({

        gymName: {
          type: string,
          required: true
        },

        email: {
          type: string,
          unique: true,
          required: true
        },

        mobileNumber: {
          countryCode: {
            type: string,
            required: true,
            default:'+91'
          },
          phoneNumber: {
            type: string,
            required: true
          }
        },
        password: {
            type: string,
            required: true,
            minLength: 8 // Enforce a minimum password length for security
          },

        address: {
          type: string,
          required: true
        },
        city: {
          type: string,
          required: true
        },
        state: {
          type: string,
          required: true
        },
        zipCode: {
          type: string,
          required: true
        },
        date:{
            type:Date,
            default:Date.now
           }
      
});

module.exports = mongoose.model('gymOwner',GymOwnerSchema)
