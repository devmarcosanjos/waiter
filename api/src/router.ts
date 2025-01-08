import { Router } from "express";

export const router = Router();

router.get("/categories", (req, res) => {
  res.send("OK");
});

router.post("/categories", (req, res) => {
  res.send("ok");
});

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
