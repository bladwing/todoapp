
import Task from "../model/tasksModel.js";

export const getAllTasks= async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getTasksById = async (req, res) => {
  try {
    const task = await Task.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(task[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
  try {
    await Task.create(req.body);
    res.json({
      message: "Product Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateTasks = async (req, res) => {
  try {
    await Task.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    await Task.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const ids = req.params.ids.split(",");

    await Product.destroy({
      where: {
        id: ids,
      },
    });
    res.json({
      message: "ProductS Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
