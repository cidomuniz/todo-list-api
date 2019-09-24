const mongoose = require('mongoose');
const immutableMongoose = require('mongoose-immutable-plugin');


const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task',
  },
  created_date: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
});

TaskSchema.plugin(immutableMongoose);

module.exports = mongoose.model('Task', TaskSchema);
