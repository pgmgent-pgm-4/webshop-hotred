import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Specification extends Model {
    static associate(models) {
      this.hasOne(models.products, {
        as: 'Product',
        foreignKey: 'specifications_id'
      });
    }
  }

  Specification.init(
    {
      height: DataTypes.FLOAT,
      widht: DataTypes.FLOAT,
      weight: DataTypes.FLOAT,
      ram: DataTypes.INTEGER,
      storage: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'specifications',
    },
  );

  return Specification;
};
