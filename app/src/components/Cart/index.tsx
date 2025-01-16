import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/cardItem";
import {
  Action,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
  Summary,
  TotalContainer,
} from "./style";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { CheckCircle } from "../Icons/CheckCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button";

interface CartProps {
  cartItems: CartItem;
}

export function Cart({ cartItems }: CartProps) {
  return (
    <>
      <FlatList
        data={cartItems}
        keyExtractor={(cartItems) => cartItems.product._id}
        style={{
          marginBottom: 20,
          maxHeight: 150,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: cardItem }) => (
          <Item>
            <ProductContainer>
              <Image
                source={{
                  uri: `https://448a-186-194-148-5.ngrok-free.app/uploads/${cardItem.product.imagePath}`,
                }}
              />
              <QuantityContainer>
                <Text size={14} color="#666">
                  {cardItem.quantity} x
                </Text>
              </QuantityContainer>
              <ProductDetails>
                <Text size={14} weight="600">
                  {cardItem.product.name}
                </Text>
                <Text size={14} color="#666" style={{ marginTop: 4 }}>
                  {formatCurrency(cardItem.product.price)}
                </Text>
              </ProductDetails>
            </ProductContainer>
            <Action>
              <TouchableOpacity style={{ marginRight: 24 }}>
                <PlusCircle />
              </TouchableOpacity>
              <TouchableOpacity>
                <MinusCircle />
              </TouchableOpacity>
            </Action>
          </Item>
        )}
      />
      <Summary>
        <TotalContainer>
          <Text color="#666">Total</Text>
          <Text size={20} weight="600">
            {formatCurrency(120)}
          </Text>
        </TotalContainer>

        <Button onPress={() => alert("Confimar pedido")}>
          Confimar pedido
        </Button>
      </Summary>
    </>
  );
}
