import { OrderBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
  return (
    <Container>
      <OrderBoard />
      <OrderBoard />
      <OrderBoard />
    </Container>
  );
}
