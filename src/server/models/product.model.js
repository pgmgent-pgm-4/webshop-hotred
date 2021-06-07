import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Product extends Model {
    static associate(models) {
      this.hasMany(models.products_has_categories, {
        foreignKey: 'products_id',
      });

      this.belongsTo(models.specifications, {
        as: 'Specification',
        foreignKey: 'specifications_id',
      });

      this.hasOne(models.promotions, {
        foreignKey: 'products_id'
      });

      this.hasMany(models.order_products_has_products, {
        foreignKey: 'products_id'
      });

      this.belongsTo(models.product_reviews, {
        foreignKey: 'product_review_id'
      });

    }
  }

  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'products',
    },
  );

  return Product;
};
