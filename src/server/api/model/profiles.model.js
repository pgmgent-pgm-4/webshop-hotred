import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "profiles", // Will use table name `user` as default behaviour.
  tableName: "profiles", // Optional: Provide `tableName` property to override the default behaviour for table name. 
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "varchar"
    },
    name: {
      type: "varchar"
    },
    lastname: {
      type: "varchar"
    },
    email: {
      type: "varchar"
    },
    phone: {
      type: "varchar"
    },
    username: {
      type: "varchar"
    },
    password: {
      type: "varchar"
    },
    street: {
      type: "varchar"
    },
    house_nr: {
      type: "varchar"
    },
    cities_id: {
      type: "int"
    },
    countries_id: {
      type: "int"
    }
  },
});
