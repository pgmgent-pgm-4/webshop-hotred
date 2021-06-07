import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Order extends Model {
    static associate(models) {
      this.hasOne(models.users, { foreignKey: 'order_id' });
      this.belongsTo(models.payments, { foreignKey: 'payment_id' });
      this.belongsTo(models.order_products, { foreignKey: 'order_products_id' });
    }
  }

  Order.init(
    {

    },
    {
      sequelize,
      modelName: 'orders',
    },
  );

  return Order;
};
