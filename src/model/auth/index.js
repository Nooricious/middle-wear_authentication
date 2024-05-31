import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const tokenModel = sequelize.define(
  "token",
  {
    // Model attributes are defined here
  
    token: {
      type: DataTypes.STRING(500),
      allowNull:false,
      unique: true,
      // allowNull defaults to true
    },
   
   
  },
 
 

);

export default tokenModel;

