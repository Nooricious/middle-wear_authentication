import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import CategoryModel from "./category.js";

const ProductModel = sequelize.define("Product", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default ProductModel;

ProductModel.belongsToMany(CategoryModel, { through: "categoryProducts" });
CategoryModel.belongsToMany(ProductModel, { through: "categoryProducts" });
