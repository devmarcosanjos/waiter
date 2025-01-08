import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategories } from "./app/useCases/categories/createCategory";

export const router = Router();

router.get("/categories", listCategories);

router.post("/categories", createCategories);

router.get("/categories/:id", (req, res) => {
  res.send("OK");
});

router.get("/orders", (req, res) => {
  res.send("OK");
});

router.post("/orders", (req, res) => {
  res.send("OK");
});

router.patch("/orders/:orderId", (req, res) => {
  res.send("OK");
});

router.delete("order/:orderId", (req, res) => {
  res.send("OK");
});
