const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize("Products", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
connection
  .authenticate()
  .then(() => {
    console.log("db connected👍");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
const Cart = require("./cart")(connection);
const Products = require("./productModels")(connection);
const db = {};
db.connection = connection;
db.Products = require("./productModels")(connection, DataTypes);
db.Cart = require("./cart")(connection, DataTypes);
db.Products.hasMany(db.Cart, { foreignKey: "ProductID", as: "carts" });
db.Cart.belongsTo(db.Products, { foreignKey: "ProductID", as: "product" });

connection
  .sync({ force: false })
  .then(() => {
    console.log("Models have been synchronized.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = { connection, Products, Cart };
