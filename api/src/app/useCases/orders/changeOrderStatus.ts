import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status))
      res.status(400).json({ error: "Status in should error" });

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch {
    res.sendStatus(500);
  }
}