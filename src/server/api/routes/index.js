import express from "express";

import * as category from "../controllers/category.controller";
import * as city from "../controllers/city.controller";
import * as country from "../controllers/country.controller";
import * as order from "../controllers/order.controller";
import * as orderProduct from "../controllers/orderProduct.controller";
import * as orderProductHasProduct from "../controllers/orderProductHasProduct.controller";
import * as payment from "../controllers/payment.controller";
import * as paymentMethod from "../controllers/paymentMethod.controller";
import * as product from "../controllers/product.controller";
import * as productCategory from "../controllers/productCategory.controller";
import * as productReview from "../controllers/productReview.controller";
import * as profile from "../controllers/profile.controller";
import * as promotion from "../controllers/promotion.controller";
import * as specification from "../controllers/specification.controller";
import * as user from "../controllers/user.controller";

const app = express.Router();

app.get("/user", user.getUsers);
app.get("/user/:userId", user.getUserById);
app.post("/user", user.createUser);
app.put("/user/:userId", user.updateUser);
app.delete("/user/:userId", user.deleteUser);

app.get("/category", category.getCategories);
app.get("/category/:categoryId", category.getCategoryById);
app.post("/category", category.createCategory);
app.put("/category/:categoryId", category.updateCategory);
app.delete("/category/:categoryId", category.deleteCategory);

app.get("/orderProduct", orderProduct.getOrderProducts);
app.get("/orderProduct/:orderProductId", orderProduct.getOrderProductById);
app.post("/orderProduct", orderProduct.createOrderProduct);
app.put("/orderProduct/:productId", orderProduct.updateOrderProduct);
app.delete("/orderProduct/:productId", orderProduct.deleteOrderProduct);

app.get("/order", order.getOrders);
app.get("/order/:orderId", order.getOrderById);
app.post("/order", order.createOrder);
app.put("/order/:orderId", order.updateOrder);
app.delete("/order/:orderId", order.deleteOrder);

app.get("/payment", payment.getPayments);
app.get("/payment/:paymentId", payment.getPaymentById);
app.post("/payment", payment.createPayment);
app.put("/payment/:paymentId", payment.updatePayment);
app.delete("/payment/:paymentId", payment.deletePayment);

app.get("/productCategory", productCategory.getProductCategories);
app.get("/productCategory/:productCategoryId", productCategory.getProductCategoryById);
app.post("/productCategory", productCategory.createProductCategory);
app.put("/productCategory/:productCategoryId", productCategory.updateProductCategory);
app.delete("/productCategory/:productCategoryId", productCategory.deleteProductCategory);

app.get("/productReview", productReview.getProductReviews);
app.get("/productReview/:productReviewId", productReview.getProductReviewById);
app.post("/productReview", productReview.createProductReview);
app.put("/productReview/:productReviewId", productReview.updateProductReview);
app.delete("/productReview/:productReviewId", productReview.deleteProductReview);

app.get("/product", product.getProducts);
app.get("/product/:productid", product.getProductById);
app.post("/product", product.createProduct);
app.put("/product/:productId", product.updateProduct);
app.delete("/product/:productId", product.deleteProduct);

app.get("/profile", profile.getProfiles);
app.get("/profile/:profileId", profile.getProfileById);
app.post("/profile", profile.createProfile);
app.put("/profile/:profileId", profile.updateProfile);
app.delete("/profile/:profileId", profile.deleteProfile);

app.get("/promotion", promotion.getPromotions);
app.get("/promotion/:promotionId", promotion.getPromotionById);
app.post("/promotion", promotion.createPromotion);
app.put("/promotion/:promotionId", promotion.updatePromotion);
app.delete("/promotion/:promotionId", promotion.deletePromotion);

app.get("/city", city.getCities);
app.get("/city/:cityId", city.getCityById);
app.post("/city", city.createCity);
app.put("/city/:cityId", city.updateCity);
app.delete("/city/:cityId", city.deleteCity);

app.get("/country", country.getCountries);
app.get("/country/:countryId", country.getCountryById);
app.post("/country", country.createCountry);
app.put("/country/:countryId", country.updateCountry);
app.delete("/country/:countryId", country.deleteCountry);

app.get("/orderProductHasProduct", orderProductHasProduct.getOrderProductHasProducts);
app.get("/orderProductHasProduct/:orderProductHasProductId", orderProductHasProduct.getOrderProductHasProductById);
app.post("/orderProductHasProduct", orderProductHasProduct.createOrderProductHasProduct);
app.put("/orderProductHasProduct/:orderProductHasPId", orderProductHasProduct.updateOrderProductHasProduct);
app.delete("/orderProductHasProduct/:orderProductHasPId", orderProductHasProduct.deleteOrderProductHasProduct);

app.get("/paymentMethod", paymentMethod.getPaymentMethods);
app.get("/paymentMethod/:paymentMethodId", paymentMethod.getPaymentMethodById);
app.post("/paymentMethod", paymentMethod.createPaymentMethod);
app.put("/paymentMethod/:paymentMethodId", paymentMethod.updatePaymentMethod);
app.delete("/paymentMethod/:paymentMethodId", paymentMethod.deletePaymentMethod);

app.get("/specification", specification.getSpecifications);
app.get("/specification/:specificationId", specification.getSpecificationById);
app.post("/specification", specification.createSpecification);
app.put("/specification/:specificationId", specification.updateSpecification);
app.delete("/specification/:specificationId", specification.deleteSpecification);

export default app;