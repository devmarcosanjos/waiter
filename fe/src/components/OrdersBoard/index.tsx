import { Order } from "../../types/Order";
import "./styles";
import { Board, OrdersContainer } from "./styles";
import { OrderModal } from "../OrderModal";
import { useState } from "react";
interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrderBoard({ icon, title, orders }: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function handleOpenModal() {
    setIsModalVisible(true);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={handleOpenModal}>
              <strong>Masa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
