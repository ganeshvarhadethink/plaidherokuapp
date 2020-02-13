const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  account_id: {
    type: String,
    trim: true,
    required: true
  },
  balances: {
    type: Object,
    trim: true,
    required: true
  },
  mask: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  official_name: {
    type: String,
    trim: true,
  },
  subtype: {
    type: String,
    trim: true,
    required: true
  },

  type: {
    type: String,
    trim: true,
    required: true
  },

});

module.exports = mongoose.model('User', UserSchema);