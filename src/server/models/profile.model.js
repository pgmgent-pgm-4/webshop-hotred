import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Profile extends Model {
    static associate(models) {
      this.hasOne(models.users, {
        foreignKey: 'profile_id',
      });

      this.belongsTo(models.cities, {
        foreignKey: 'city_id'
      });

      this.belongsTo(models.countries, {
        foreignKey: 'country_id'
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
      houseNr: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'profiles',
    },
  );

  return Profile;
};
