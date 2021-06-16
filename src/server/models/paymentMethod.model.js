import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentMethod extends Model {
    static associate(models) {
      this.hasOne(models.payments, {
        foreignKey: 'payment_methods_id',
        constraints: false,
      });
    }
  }

  PaymentMethod.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'payment_methods',
    },
  );

  return PaymentMethod;
};
