import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.profiles, { foreignKey: 'profile_id', constraints: false, });
      this.belongsTo(models.payments, { foreignKey: 'payment_id', constraints: false, });
      this.belongsTo(models.product_reviews, { foreignKey: 'product_review_id', constraints: false, });
      this.belongsTo(models.orders, { foreignKey: 'order_id', constraints: false, });
    }
  }

  User.init(
    {
      
    },
    {
      sequelize,
      modelName: 'users',
    },
  );

  return User;
};
