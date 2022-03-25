const checkResourceValid = (req, res, next) => {
    const { resource_name } = req.body;
    if (
      resource_name === undefined ||
      typeof resource_name !== "string" ||
      !resource_name.trim()
    ) {
      next({
        status: 400,
        message: "invalid resource_name",
      });
    } else {
      next();
    }
  };

  const checkProjectValid = (req, res, next) => {
    const { project_name } = req.body;
    if (
        project_name === undefined ||
      typeof project_name !== "string" ||
      !project_name.trim()
    ) {
      next({
        status: 400,
        message: "invalid project_name",
      });
    } else {
      next();
    }
  };

  const checkTaskValid = (req, res, next) => {
    const { task_description } = req.body;
    if (
      task_description === undefined ||
      typeof task_description !== "string" ||
      task_description.trim() === ""
    ) {
      next({
        status: 400,
        message: "invalid task_description",
      });
    } else {
      next();
    }
  };





module.exports = {
    checkResourceValid,
    checkProjectValid,
    checkTaskValid
};