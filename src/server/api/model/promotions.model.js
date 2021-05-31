import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "promotions", // Will use table name `user` as default behaviour.
  tableName: "promotions", // Optional: Provide `tableName` property to override the default behaviour for table name. 
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    products_id: {
      type: "int"
    }
  }
});
