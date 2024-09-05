const { DataTypes } = require("sequelize");

module.exports = (connection) => {
  const Cart = connection.define(
    "Cart",
    {
      CartID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      NameCart: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      CartImage: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      Price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { tableName: "carts" }
  );

  return Cart;
};
