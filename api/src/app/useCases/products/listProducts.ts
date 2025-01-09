import { Product } from "./../../models/Product";
import { Request, Response } from "express";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    res.status(201).json(products);
  } catch {
    res.sendStatus(500);
  }
}
