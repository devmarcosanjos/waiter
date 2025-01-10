import { ModalBody, Overlay } from "./styles";
import icon from "../../assets/images/close-icon.svg";
interface OrderModalProps {
  visible: boolean;
}

export function OrderModal({ visible }: OrderModalProps) {
  if (!visible) return null;

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button type="button">
            <img src={icon} alt="icone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status pedido</small>
          <div>
            <span>🕐</span>
            <strong>Fila de espera</strong>
          </div>
        </div>
      </ModalBody>
    </Overlay>
  );
}
