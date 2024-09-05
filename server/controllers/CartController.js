const Cart = require("../models/cart");

const getAllCrats = async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.status(200).send(carts);
  } catch (error) {
    console.error("Error fetching carts:", error);
    res.status(500).send("Internal Server Error");
  }
};
// const getOneCart = async (req, res) => {
//   const carts = await Cart.findOne({ where: { CartID: req.params.id } });
//   res.json(carts);
// };
// const DeleteCart = async (req, res) => {
//   const carts = await Cart.destroy({ where: { CartID: req.params.id } });
//   res.json(carts);
// };
// const addCart = async (req, res) => {
//   const carts = await Cart.create(req.body);
//   res.json(carts);
// };
// const updateCart = async (req, res) => {
//   const carts = await Cart.update(req.body, {
//     where: { CartID: req.params.id },
//   });
//   res.json(carts);
// };

module.exports = {
  getAllCrats,
  //   getOneCart,
  //   DeleteCart,
  //   addCart,
  //   updateCart,
};
