import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Category extends Model {
    static associate(models) {      
      this.hasMany(models.products_has_categories, {
        foreignKey: 'categories_id'
      })
    }
  }

  Category.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'categories',
    },
  );

  return Category;
};
