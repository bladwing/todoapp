import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    pwd: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.STRING,
    }
  },
);

export default Users;
