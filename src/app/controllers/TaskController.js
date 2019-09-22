
const mongooseErrorHandler = require('mongoose-error-handler');
const Task = require('../models/TaskModel');

module.exports = {
  // Read Tasks
  async readTasks(req, res) {
    function success(resp) {
      return res.status(200).json(resp);
    }
    await Task.find()
      .then(success);
  },

  // Read Task By Id
  async readTask(req, res) {
    function success(resp) {
      return res.status(200).json(resp);
    }
    function error(err) {
      return res.status(500).json({ msg: mongooseErrorHandler.set(err, req.t) });
    }
    await Task.findById(req.params.id)
      .then(success)
      .catch(error);
  },

  // Create task
  async createTask(req, res) {
    function success(resp) {
      return res.status(201).json(resp);
    }
    function error(err) {
      return res.status(500).json({ msg: mongooseErrorHandler.set(err, req.t) });
    }
    await Task.create(req.body)
      .then(success)
      .catch(error);
  },

  // Update task
  async updateTask(req, res) {
    function success(resp) {
      if (resp == null) {
        return res.status(404).json({ msg: 'Not Found' });
      }
      return res.status(200).json(resp);
    }
    function error(err) {
      return res.status(500).json({ msg: mongooseErrorHandler.set(err, req.t) });
    }
    await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(success)
      .catch(error);
  },

  // Delete task
  async deleteTask(req, res) {
    function success(resp) {
      if (resp == null) {
        return res.status(404).json({ msg: 'Not Found' });
      }
      return res.status(200).json({ msg: 'Successfully deleted' });
    }
    function error(err) {
      return res.status(500).json({ msg: mongooseErrorHandler.set(err, req.t) });
    }
    await Task.findByIdAndRemove(req.params.id)
      .then(success)
      .catch(error);
  },
};
