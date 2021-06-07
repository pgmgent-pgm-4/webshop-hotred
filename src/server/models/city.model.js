import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class City extends Model {
    static associate(models) {      
      this.hasMany(models.profiles, {
        foreignKey: 'city_id'
      })
    }
  }

  City.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'cities',
    },
  );

  return City;
};
