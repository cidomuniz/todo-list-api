const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
});

module.exports = mongoose.model('Task', TaskSchema);
