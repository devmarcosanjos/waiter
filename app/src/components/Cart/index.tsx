import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/cardItem";
import {
  Action,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
} from "./style";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { CheckCircle } from "../Icons/CheckCircle";
import { MinusCircle } from "../Icons/MinusCircle";

interface CartProps {
  cartItems: CartItem;
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(cartItems) => cartItems.product._id}
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
  );
}
