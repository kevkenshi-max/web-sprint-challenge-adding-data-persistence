// build your `/api/projects` router here
const router = require('express').Router();
const Task = require('./model.js')
const { checkTaskValid } = require('../middleware')

router.get('/', async (req, res, next) => {
    try {
      const tasks = await Task.getAll()
      res.json(tasks)
    } catch (err) {
      next(err)
    }
})

router.post("/", checkTaskValid, async (req, res, next) => {
    try {
      const newTask = await Task.create(req.body);
      res.json({
        task_id: newTask.task_id,
        task_description: newTask.task_description,
        task_notes: newTask.task_notes,
        task_completed: newTask.task_completed === 0 ? false : true,
        project_id: newTask.project_id
      });
    } catch (err) {
      next(err);
    }
  });

module.exports = router