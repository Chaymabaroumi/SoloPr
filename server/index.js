const express = require("express");
const App = express();
const port = 5000;
const db = require("./models/index");

const schema = require("./models/productModels");
const productRouter = require("./routers/productRouter");
const CartRouter = require("./routers/CartRouter");
const { Cart } = require("./models/cart");
const cors = require("cors");
App.use(express.json());
App.use(cors());
App.use("/", productRouter);
App.use("/cart", CartRouter);

App.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
