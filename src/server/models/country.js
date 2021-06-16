import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class County extends Model {
    static associate(models) {      
      this.hasMany(models.profiles, {
        foreignKey: 'country_id',
        constraints: false,
      })
    }
  }

  County.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'countries',
    },
  );

  return County;
};
