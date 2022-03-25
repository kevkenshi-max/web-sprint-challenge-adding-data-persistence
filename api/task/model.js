// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const task = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description");

    const result = []

    task.forEach((row) => {
        if (row.task_completed === 1) {
            result.push({
                task_id: row.task_id,
                task_description: row.task_description,
                task_notes: row.task_notes,
                task_completed: true,
                project_name: row.project_name,
                project_description: row.project_description
            })
        } else {
            result.push({
                task_id: row.task_id,
                task_description: row.task_description,
                task_notes: row.task_notes,
                task_completed: false,
                project_name: row.project_name,
                project_description: row.project_description
            })
        }
    })
    return result
}

const create = async (task) => {
    const [id] = await db("tasks").insert(task);
    return db("tasks as t")
      .join("projects as p", "t.project_id", "p.project_id")
      .where("task_id", id)
      .select("t.*")
      .first();
  };

module.exports = {
    getAll,
    create,
}