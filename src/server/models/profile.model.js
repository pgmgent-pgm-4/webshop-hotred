import { datatype } from 'faker';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Profile extends Model {
    static associate(models) {
      this.hasOne(models.users, {
        foreignKey: 'profile_id',
        constraints: false,
      });

      this.belongsTo(models.cities, {
        foreignKey: 'city_id',
        constraints: false,
      });

      this.belongsTo(models.countries, {
        foreignKey: 'country_id',
        constraints: false,
      });
    }
  }

  Profile.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      street: DataTypes.STRING,
      house_nr: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'profiles',
    },
  );

  return Profile;
};
