import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class payment extends Model {
    static associate(models) {
      this.hasOne(models.orders, {
        foreignKey: 'payment_id',
        constraints: false,
      });

      this.belongsTo(models.payment_methods, {
        foreignKey: 'payment_methods_id',
        constraints: false,
      });

      this.hasOne(models.users, {
        foreignKey: 'payment_id',
        constraints: false,
      });
    }
  }

  payment.init(
    {
      card_number: DataTypes.INTEGER,
      card_exp_date: DataTypes.STRING,
      payment_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'payments',
    },
  );

  return payment;
};
