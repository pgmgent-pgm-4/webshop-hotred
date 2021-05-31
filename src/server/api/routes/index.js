import express from "express";
import user from "../controllers/userController.js"
import category from "../controllers/categoryController.js"
import orderProduct from "../controllers/orderProductsController.js"
import order from "../controllers/orderController.js"
import payment from "../controllers/paymentController.js"
import productCategory from "../controllers/productCategoryController.js"
import productReview from "../controllers/productReviewController.js"
import product from "../controllers/productController.js"
import profile from "../controllers/profilesController.js"
import promotion from "../controllers/promotionController.js"

const app = express.Router();

app.get("/user", user.getUser);
app.post("/user", user.addUser);
app.put("/user/:id", user.updateUser);
app.delete("/user/:id", user.deleteUser);

app.get("/category", category.getCategory);
app.post("/category", category.addCategory);
app.put("/category/:id", category.updateCategory);
app.delete("/category/:id", category.deleteCategory);

app.get("/orderProduct", orderProduct.getOrderProduct);
app.post("/orderProduct", orderProduct.addOrderProduct);
app.put("/orderProduct/:id", orderProduct.updateOrderProduct);
app.delete("/orderProduct/:id", orderProduct.deleteOrderProduct);

app.get("/order", order.getOrder);
app.post("/order", order.addOrder);
app.put("/order/:id", order.updateOrder);
app.delete("/order/:id", order.deleteOrder);

app.get("/payment", payment.getPayment);
app.post("/payment", payment.addPayment);
app.put("/payment/:id", payment.updatePayment);
app.delete("/payment/:id", payment.deletePayment);

app.get("/productCategory", productCategory.getProductCategory);
app.post("/productCategory", productCategory.addProductCategory);
app.put("/productCategory/:id", productCategory.updateProductCategory);
app.delete("/productCategory/:id", productCategory.deleteProductCategory);

app.get("/productReview", productReview.getProductReview);
app.post("/productReview", productReview.addProductReview);
app.put("/productReview/:id", productReview.updateProductReview);
app.delete("/productReview/:id", productReview.deleteProductReview);

app.get("/product", product.getProduct);
app.post("/product", product.addProduct);
app.put("/product/:id", product.updateProduct);
app.delete("/product/:id", product.deleteProduct);

app.get("/profile", profile.getProfile);
app.post("/profile", profile.addProfile);
app.put("/profile/:id", profile.updateProfile);
app.delete("/profile/:id", profile.deleteProfile);

app.get("/promotion", promotion.getPromotion);
app.post("/promotion", promotion.addPromotion);
app.put("/promotion/:id", promotion.updatePromotion);
app.delete("/promotion/:id", promotion.deletePromotion);


export default app;