const { uuid } = require('uuidv4');

const projects = [];

module.exports = {
  index(request, response) {
    const { title } = request.query;

    const results = title
      ? projects.filter(project => project.title.includes(title))
      : projects;

    return response.json(results);
  },

  create(request, response) {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
  },

  update(request, response) {
    const { id } = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
      return response.status(400).json({
        error: 'Project not found'
      });
    }

    const project = { id, title, owner };

    projects[projectIndex] = projects;

    return response.json(project);
  },

  delete(request, response) {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
      return response.status(400).json({
        error: 'Project not found'
      });
    }

    projects.slice(projectIndex, 1);

    return response.status(204).send();
  }
};
