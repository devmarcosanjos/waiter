import { model, Schema } from "mongoose";

export const Order = model(
  "Order",
  new Schema({
    table: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["WAITING", "IN_PRODUCTION", "DONE"],
      default: "WAITING",
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "Product",
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
      require: true,
    },
  })
);
