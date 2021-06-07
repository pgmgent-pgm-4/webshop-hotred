import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Promotion extends Model {
    static associate(models) {
      this.belongsTo(models.products, {
        foreignKey: "products_id"
      })
    }
  }

  Promotion.init(
    {

    },
    {
      sequelize,
      modelName: 'promotions',
    },
  );

  return Promotion;
};
