const { DataTypes } = require("sequelize");

module.exports = (connection) => {
  const Products = connection.define(
    "Products",
    {
      ProductId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { tableName: "Products" }
  );

  return Products;
};
