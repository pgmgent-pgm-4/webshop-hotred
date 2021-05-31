import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "product_reviews", // Will use table name `user` as default behaviour.
  tableName: "product_reviews", // Optional: Provide `tableName` property to override the default behaviour for table name. 
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    subject: {
      type: "varchar"
    },
    review: {
      type: "text"
    },
  },
});
