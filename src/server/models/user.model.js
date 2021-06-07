import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.profiles, { foreignKey: 'profile_id' });
      this.belongsTo(models.payments, { foreignKey: 'payment_id' });
      this.belongsTo(models.product_reviews, { foreignKey: 'product_review_id' });
      this.belongsTo(models.orders, { foreignKey: 'order_id' });
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
