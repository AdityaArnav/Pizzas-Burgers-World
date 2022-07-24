import express from "express";
import { addProductController, getProductController } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get('/getproducts', getProductController);

productRouter.post("/addproducts", addProductController);

export default productRouter;