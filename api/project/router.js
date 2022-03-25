// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model.js')
const { checkProjectValid } = require('../middleware')

router.get('/', async (req, res, next) => {
    try {
      const projects = await Project.getAll()
      res.json(projects)
    } catch (err) {
      next(err)
    }
})

router.post("/", checkProjectValid, async (req, res, next) => {
    try {
      const newProject = await Project.create(req.body);
      res.json({
        project_id: newProject.project_id,
        project_name: newProject.project_name,
        project_description: newProject.project_description,
        project_completed: newProject.project_completed === 0 ? false : true,
      });
    } catch (err) {
      next(err);
    }
  });

module.exports = router