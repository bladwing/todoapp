import { BOOLEAN, Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Tasks = db.define(
  "tasks",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    }
  },
);

export default Tasks;
