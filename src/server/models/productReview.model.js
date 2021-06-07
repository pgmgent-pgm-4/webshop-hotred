import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class ProductReview extends Model {
    static associate(models) {
      this.hasOne(models.products, { foreignKey: 'product_review_id' });
      this.hasOne(models.users, { foreignKey: 'product_review_id' });
    }
  }

  ProductReview.init(
    {
      subject: DataTypes.STRING,
      review: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'product_reviews',
    },
  );

  return ProductReview;
};
