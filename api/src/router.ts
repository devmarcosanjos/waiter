import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategories } from "./app/useCases/categories/createCategory";
import { createProducts } from "./app/useCases/products/createProducts";
import { listProducts } from "./app/useCases/products/listProducts";

import multer from "multer";
import path from "node:path";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get("/categories", listCategories);

router.post("/categories", createCategories);

router.get("/categories/:id", (req, res) => {
  res.send("OK");
});

router.get("/products", listProducts);

router.post("/products", upload.single("image"), createProducts);

router.patch("/orders/:orderId", (req, res) => {
  res.send("OK");
});

router.delete("order/:orderId", (req, res) => {
  res.send("OK");
});
