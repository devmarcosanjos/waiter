import "./styles";
import { Board, OrdersContainer } from "./styles";

interface OrderBoardProps {
  icon: string;
  title: string;
  itens: number;
}

export function OrderBoard({ icon, title, itens }: OrderBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({itens})</span>
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
