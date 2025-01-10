import { Order } from "../../types/Order";
import { OrderBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "123123",
    table: "001",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza abc",
          imagePath: "teste.png",
          price: 40,
        },
        quantity: 3,
        _id: "1212121212122",
      },
      // {
      //   product: {
      //     name: "Coca cola",
      //     imagePath: "ushauisha.png",
      //     price: 7,
      //   },
      //   quantity: 1,
      //   _id: "1212121212123",
      // },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrderBoard icon="🕐" title="Fila de espera" orders={orders} />
      <OrderBoard icon="🧑‍🍳" title="Em preparação" orders={orders} />
      <OrderBoard icon="✅" title="Pronto" orders={orders} />
    </Container>
  );
}
