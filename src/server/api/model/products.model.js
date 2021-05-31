import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "products", // Will use table name `user` as default behaviour.
  tableName: "products", // Optional: Provide `tableName` property to override the default behaviour for table name. 
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "varchar"
    },
    price: {
      type: "int"
    },
    specifications_id: {
      type: "int"
    },
    revies_id: {
      type: "int"
    }
  },
});
