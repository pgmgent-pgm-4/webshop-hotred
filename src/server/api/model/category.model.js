import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Category", // Will use table name `user` as default behaviour.
  tableName: "category", // Optional: Provide `tableName` property to override the default behaviour for table name. 
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "varchar"
    },
  },
});
