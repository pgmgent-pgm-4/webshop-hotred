import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "payments", // Will use table name `user` as default behaviour.
  tableName: "payments", // Optional: Provide `tableName` property to override the default behaviour for table name. 
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    card_number: {
      type: "int"
    },
    card_exp_date: {
      type: "varchar"
    },
    payment_date: {
      type: "varchar"
    },
    payment_methods_id: {
      type: "int"
    }
  },
});
