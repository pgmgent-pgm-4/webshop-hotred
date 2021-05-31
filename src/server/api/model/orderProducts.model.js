import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "order_products", // Will use table name `user` as default behaviour.
  tableName: "order_products", // Optional: Provide `tableName` property to override the default behaviour for table name. 
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
  },
});
