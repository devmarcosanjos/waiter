import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";
import icon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect } from "react";
interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => void;
  isLoading: boolean;
  onChangeOrderStatus: () => void;
}

export function OrderModal({
  visible,
  order,
  onClose,
  onCancelOrder,
  isLoading,
  onChangeOrderStatus,
}: OrderModalProps) {
  if (!visible || !order) return null;

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={icon} alt="icone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "🕐"}
              {order.status === "IN_PRODUCTION" && "🧑‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de Espera"}
              {order.status === "IN_PRODUCTION" && "Em Produção"}
              {order.status === "DONE" && "Finalizado"}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({ product, quantity }) => (
              <div className="item" key={product.imagePath}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28"
                />
                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>
        <Actions>
          {order.status !== "DONE" && (
            <button
              type="button"
              className="primary"
              // disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order.status === "WAITING" && "🧑‍🍳"}
                {order.status === "IN_PRODUCTION" && "✅"}
              </span>
              <strong>
                {order.status === "WAITING" && "Iniciar Produção"}
                {order.status === "IN_PRODUCTION" && "Concluir pedido"}
              </strong>
            </button>
          )}
          <button
            type="button"
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            <strong>Cancelar pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
