import CategoryModel from "../../model/product/category.js";

const categoryController = {
  getAll: async (req, res) => {
    try {
      const categories = await CategoryModel.findAll({});

      res.json({
        data: categories,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;

      const category = await CategoryModel.findByPk(id);
      if (!category) {
        return res.status(404).json({ message: "No category with this name" });
      }
      res.status(200).json({ data: category });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  create: async (req, res) => {
    try {
      const payload = req.body;

      console.log(payload, "payload");

      const category = new CategoryModel();
      category.name = payload.name;
      await category.save();

      res.status(200).json({ message: "category created", category });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default categoryController;
