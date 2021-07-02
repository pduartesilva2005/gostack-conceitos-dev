const { Router } = require('express');

const validateProjectId = require('./utils/validateProjectId');
const ProjectController = require('./controllers/ProjectController');

const routes = Router();

routes.use('/projects/:id', validateProjectId);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.create);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.delete);

module.exports = routes;
