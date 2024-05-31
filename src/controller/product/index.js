import CategoryModel from "../../model/product/category.js";
import ProductModel from "../../model/product/index.js";
import { Op } from "sequelize";
const ProductController = {
  getAll: async (req, res) => {
    try {
      const { search } = req.query;

      const products = await ProductModel.findAll({
        include: [
          {
            model: CategoryModel,
            attributes: ["name"],
            where: {
              id: {
                [Op.like]: `%${search}%`,
              },
              name: {
                [Op.like]: `%${search}%`,
              },
            },
          },
        ],
      });

      res.json({
        data: products,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;

      const product = await ProductModel.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "No product with this name" });
      }
      res.status(200).json({ data: product });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  create: async (req, res) => {
    try {
      const payload = req.body;

      console.log(payload, "payload");

      const product = new ProductModel();
      product.name = payload.name;

      await product.save();
      await product.addCategories(payload.categories);

      res.status(200).json({ message: "Product created", product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default ProductController;
