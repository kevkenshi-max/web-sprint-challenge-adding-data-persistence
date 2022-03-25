// build your `/api/tasks` router here
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

router.post('/', checkTaskValid, async (req, res, next) => {
      try {
      const task = await Task.create(req.body)
      res.json(task)
    } catch (err) {
      next(err)
    }
})

module.exports = router