import { FlatList } from "react-native";
import { products } from "../../mocks/products";
import { Text } from "../Text";
import { Image, Product, ProductDetails } from "./styles";

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(products) => products._id}
      renderItem={({ item: product }) => (
        <Product>
          <Image
            source={{
              uri: "https://732e-186-194-148-5.ngrok-free.app/uploads/1736432707539-quatro-queijos.png   ",
            }}
          />

          <ProductDetails>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </ProductDetails>
        </Product>
      )}
    />
  );
}
