import tokenModel from "../model/auth/index.js";
import CategoryModel from "../model/product/category.js";
import ProductModel from "../model/product/index.js";
import SalesModel from "../model/sales/index.js";
import SaleProductModel from "../model/sales/salesProducts.js";
import StudentModel from "../model/student/index.js";
import UserModel from "../model/user/index.js";
import sequelize from "./config.js";

const syncDB = async () => {

  await sequelize.sync({ alter: true, force: false });
  await CategoryModel.sync({ alter: true, force: false });
  await ProductModel.sync({ alter: true, force: false });
  await UserModel.sync({ alter: true, force: false });
  await tokenModel.sync({ alter: true, force: false });

  await StudentModel.sync({ alter: true, force: false });
  await SalesModel.sync({ alter: true, force: false });
  await SaleProductModel.sync({ alter: true, force: false });
};

export default syncDB;
