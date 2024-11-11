// models/Entry.js

import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contact: {
    type: String,
    required: true,
    trim: true,
  },
  reason: {
    type: String,
    required: true,
    trim: true,
  },
})

// Export the model (or reuse the existing model if already defined)
const User = mongoose.models.Users || mongoose.model('User', userSchema);

export default Users;
