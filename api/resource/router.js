// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model.js')
const { checkResourceValid } = require('../middleware')

router.get('/', async (req, res, next) => {
    try {
      const resources = await Resource.getAll()
      res.json(resources)
    } catch (err) {
      next(err)
    }
})

router.post('/', checkResourceValid, async (req, res, next) => {
      try {
      const resource = await Resource.create(req.body)
      res.json(resource)
    } catch (err) {
      next(err)
    }
})


module.exports = router
