import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class ProductCategory extends Model {
    static associate(models) {
      this.belongsTo(models.products, {
        as: 'products_has_categories',
        foreignKey: 'products_id',
      });

      this.belongsTo(models.categories, {
        foreignKey: 'categories_id'
      });
    }
  }

  ProductCategory.init(
    {

    },
    {
      sequelize,
      modelName: 'products_has_categories',
    },
  );

  return ProductCategory;
};
