import "./styles";
import { Board, OrdersContainer } from "./styles";

export function OrderBoard() {
  return (
    <Board>
      <header>
        <span>🕐</span>
        <strong>Fila de Espera</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type="button">
          <strong>Masa 1</strong>
          <span>2 itens</span>
        </button>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
