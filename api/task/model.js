// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks')
}

const create = async (task) => {
    const [id] = await db('tasks').insert(task)
    return db('tasks').where('task_id', id).first()
}

module.exports = {
    getAll,
    create,
}