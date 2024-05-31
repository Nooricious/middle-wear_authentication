import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const StudentModel = sequelize.define(
  "Student",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    phone: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

export default StudentModel;
