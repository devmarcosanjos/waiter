import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Container, Content, OrderHeader } from "./styles";

interface HeaderProps {
  selectTable: string;
}

export function Header({ selectTable }: HeaderProps) {
  return (
    <Container>
      {!selectTable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem Vindo(a) ao
          </Text>
          <Text size={24} weight="700">
            WAITER
            <Text size={24}>APP</Text>
          </Text>
        </>
      )}

      {selectTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight="600">
              Pedido
            </Text>
            <TouchableOpacity>
              <Text color="#D73035" weight="600" size={14}>
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>
        </Content>
      )}
    </Container>
  );
}
