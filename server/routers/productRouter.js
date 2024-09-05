const express = require("express");
const Router = express.Router();
const {
  getAllProducts,
  getOneProduct,
  addProducts,
  deleteProduct,
  updateproduct,
  getProdByName,
} = require("../controllers/productController");

Router.get("/get", getAllProducts);
Router.get("/get/:id", getOneProduct);
Router.post("/add", addProducts);
Router.delete("/delete/:id", deleteProduct);
Router.put("/update/:id", updateproduct);
Router.get("/get/name/:name", getProdByName);

module.exports = Router;
