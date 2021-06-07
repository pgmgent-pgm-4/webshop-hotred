import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class OrderProduct extends Model {
    static associate(models) {
      this.hasMany(models.order_products_has_products, { 
        as: 'order_products_has_products',
        foreignKey: 'order_products_id'
      });

      this.hasOne(models.orders, {
        foreignKey: 'order_products_id'
      })
    }
  }

  OrderProduct.init(
    {
      
    },
    {
      sequelize,
      modelName: 'order_products',
    },
  );

  return OrderProduct;
};
