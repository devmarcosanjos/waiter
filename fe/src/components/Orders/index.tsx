import { OrderBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
  return (
    <Container>
      <OrderBoard icon="🕐" title="Fila de espera" itens="10" />
      <OrderBoard icon="🧑‍🍳" title="Em preparação" itens="2" />
      <OrderBoard icon="✅" title="Pronto" itens="1" />
    </Container>
  );
}
