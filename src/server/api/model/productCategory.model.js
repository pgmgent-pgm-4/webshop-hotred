import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "products_has_categories", // Will use table name `user` as default behaviour.
  tableName: "products_has_categories", // Optional: Provide `tableName` property to override the default behaviour for table name. 
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    products_id: {
      type: "int"
    },
    categories_id: {
      type: "int"
    },
  },
});
