import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "./controllers/users.js";

import {
  getAllTasks,
  createTasks,
  getTasksById,
  updateTasks,
  deleteTasks,
} from "./controllers/tasks.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/main");
});

router.get("/users/", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users/", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/delteById/:id", deleteUser);

router.get("/tasks/", getAllTasks);
router.get("/tasks/:id", getTasksById);
router.post("/tasks/", createTasks);
router.patch("/tasks/:id", updateTasks);
router.delete("/tasks/deleteById/:id", deleteTasks);

export default router;
