import { Order } from "./../../models/Order";
import { Request, Response } from "express";

export async function createOrder(req: Request, res: Response) {
  const { table, products } = req.body;
  try {
    const order = await Order.create({ table, products });

    res.status(201).json(order);
  } catch {
    res.sendStatus(500);
  }
}
