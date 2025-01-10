import { ModalBody, OrderDetails, Overlay } from "./styles";
import icon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || !order) return null;

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button">
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
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
