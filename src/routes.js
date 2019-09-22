const routes = require('express').Router();

const TaskController = require('./app/controllers/TaskController');

// Definição rotas
routes.get('/todo', TaskController.readTasks);
routes.get('/todo/:id', TaskController.readTask);
routes.post('/todo', TaskController.createTask);
routes.put('/todo/:id', TaskController.updateTask);
routes.delete('/todo/:id', TaskController.deleteTask);


module.exports = routes;
