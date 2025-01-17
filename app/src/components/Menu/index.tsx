import { FlatList } from "react-native";
import { products } from "../../mocks/products";
import { Text } from "../Text";
import {
  AddToCartButton,
  Image,
  ProductContainer,
  ProductDetails,
  Separator,
} from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { Product } from "../../types/product";

interface MenuProps {
  onAddToCard: (product: Product) => void;
}

export function Menu({ onAddToCard }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectProduct, setSelectProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectProduct}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(products) => products._id}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
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

            <AddToCartButton onPress={() => onAddToCard(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
