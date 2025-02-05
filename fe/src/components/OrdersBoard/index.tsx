import { Order } from "../../types/Order";
import "./styles";
import { Board, OrdersContainer } from "./styles";
import { OrderModal } from "../OrderModal";
import { useState } from "react";
import { api } from "../../utils/api";
import { toast } from "react-toastify";
interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];

  cancelOrder: (orderId: string) => void;

  onChangeOrderStatus: (orderId: string, status: Order["status"]) => void;
}

export function OrderBoard({
  icon,
  title,
  orders,
  cancelOrder,
  onChangeOrderStatus,
}: OrderBoardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectOrder, setSelectOrder] = useState<null | Order>(null);
  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectOrder(null);
  }

  async function handleCancelModal() {
    setIsLoading(true);
    if (selectOrder) {
      await api.delete(`/orders/${selectOrder._id}`);
    }

    toast.success(`O pedido da mesa ${selectOrder?.table} foi cancelado`);
    cancelOrder(selectOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";

    await api.patch(`/orders/${selectOrder?._id}`, { status });

    toast.success(
      `O pedido da mesa ${selectOrder?.table} teve o pedido alterado!`
    );

    onChangeOrderStatus(selectOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        onCancelOrder={handleCancelModal}
        visible={isModalVisible}
        order={selectOrder}
        onClose={handleCloseModal}
        isLoading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Masa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
