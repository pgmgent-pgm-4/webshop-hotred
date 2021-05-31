import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "orders", // Will use table name `user` as default behaviour.
  tableName: "orders", // Optional: Provide `tableName` property to override the default behaviour for table name. 
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    order_products_id: {
      type: "int"
    },
    payments_id: {
      type: "int"
    },
  },
});
