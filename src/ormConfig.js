import ormConfig from "typeorm";

import userSchema from "./server/api/model/user.model.js";
import categorySchema from "./server/api/model/category.model.js"
import orderProductSchema from "./server/api/model/orderProducts.model.js"
import orderSchema from "./server/api/model/orders.model.js"
import paymentSchema from "./server/api/model/payments.model.js"
import productCategorySchema from "./server/api/model/productCategory.model.js"
import productReviewSchema from "./server/api/model/productReviews.model.js"
import productSchema from "./server/api/model/products.model.js"
import profileSchema from "./server/api/model/profiles.model.js"
import promotionSchema from "./server/api/model/promotions.model.js"

export default await ormConfig.createConnection({ 
  "type": "better-sqlite3",
  "database": "./server/webshopDb.sqlite3",
  "synchronize": true, 
  "logging": true, 
  entities: [
    userSchema,
    categorySchema,
    orderProductSchema,
    orderSchema,
    paymentSchema,
    productCategorySchema,
    productReviewSchema,
    productSchema,
    profileSchema,
    promotionSchema,
  ] 
});