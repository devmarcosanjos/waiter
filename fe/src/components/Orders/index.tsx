import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { OrderBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { api } from "../../utils/api";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  function handleOrderStatusChange(orderId: string, status: Order["status"]) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  }

  useEffect(() => {
    api.get("/orders").then(({ data }) => {
      console.log("API Response:", data);
      setOrders(data);
    });
  }, []);

  const waitting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order.status === "DONE");

  return (
    <Container>
      <OrderBoard
        icon="🕐"
        title="Fila de espera"
        orders={waitting}
        cancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrderBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={inProduction}
        cancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrderBoard
        icon="✅"
        title="Pronto"
        orders={done}
        cancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
