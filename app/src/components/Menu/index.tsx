import { FlatList } from "react-native";
import { products } from "../../mocks/products";
import { Text } from "../Text";
import { Image, Product, ProductDetails, Separator } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(products) => products._id}
      renderItem={({ item: product }) => (
        <Product>
          <Image
            source={{
              uri: `https://448a-186-194-148-5.ngrok-free.app/uploads/${product.imagePath}`,
            }}
          />

          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text color="#666" size={14} style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text size={14} weight="600">
              {formatCurrency(product.price)}
            </Text>
          </ProductDetails>
        </Product>
      )}
    />
  );
}
