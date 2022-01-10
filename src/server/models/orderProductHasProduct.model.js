import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class OrderProductHasProduct extends Model {
    static associate(models) {
      this.belongsTo(models.products, {
        foreignKey: 'products_id',
        constraints: false,
      });

      this.belongsTo(models.order_products, {
        foreignKey: 'order_products_id',
        constraints: false,
      })
    }
  }

  OrderProductHasProduct.init(
    {

    },
    {
      sequelize,
      modelName: 'order_products_has_products',
    },
  );

  return OrderProductHasProduct;
};
