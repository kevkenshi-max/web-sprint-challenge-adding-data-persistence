// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const project = await db('projects')

    const result = []

    project.forEach((row) => {
        if (row.project_completed === 1) {
            result.push({
                project_id: row.project_id,
                project_name: row.project_name,
                project_description: row.project_description,
                project_completed: true
            })
        } else {
            result.push({
                project_id: row.project_id,
                project_name: row.project_name,
                project_description: row.project_description,
                project_completed: false
            })
        }
    })
    return result
}

const create = async (project) => {
    const [id] = await db('projects').insert(project)
    return db('projects').where('project_id', id).first()
}

module.exports = {
    getAll,
    create,
}