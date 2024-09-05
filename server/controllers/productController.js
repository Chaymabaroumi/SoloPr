const { where } = require("sequelize");
const { Products } = require("../models/index");
module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const product = await Products.findAll();
      res.status(200).send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  getOneProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Products.findOne({ where: { ProductId: id } });

      if (!product) {
        return res.status(404).send("Product not found");
      }

      res.status(200).send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  addProducts: async (req, res) => {
    try {
      const newProduct = req.body;
      const product = await Products.create(newProduct);
      res.status(200).send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Products.destroy({ where: { ProductId: id } });
      if (deleted) {
        res.status(200).send(" deleted successfully");
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
  updateproduct: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await Products.update(req.body, { where: { id } });
      if (updated) {
        const update = await Products.findByPk(id);
        res.status(200).send(update);
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
  getProdByName: async (req, res) => {
    try {
      let nou = await Products.findAll({ where: { name: req.params.name } });
      if (nou) {
        res.status(200).send(nou);
      } else {
        res.status(404).send("Product not found");
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send("Internal server error");
    }
  },
};
