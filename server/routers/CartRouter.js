const CartRouter = require("express").Router();
const CartController = require("../controllers/CartController");

CartRouter.get("/getcart", CartController.getAllCrats);
// CartRouter.get("/OneCart/:id", CartController.getOneCart);
// CartRouter.delete("/deleteCart/:id", CartController.DeleteCart);
// CartRouter.post("/addCart", CartController.addCart);
// CartRouter.put("/updateCart/:id", CartController.updateCart);

module.exports = CartRouter;
