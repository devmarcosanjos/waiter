import { FlatList, Modal } from "react-native";
import { Text } from "../Text";
import { Product } from "../../types/product";
import {
  CloseButton,
  Footer,
  FooterContainer,
  Header,
  Igredient,
  Image,
  IngredientsContainer,
  ModalBody,
  PriceContainer,
} from "./styles";
import { Close } from "../../assets/Icons/Close";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";

interface ProductModal {
  visible: boolean;
  onClose: () => void;

  product: null | Product;
  onAddToCard: (product: Product) => void;
}

export function ProductModal({
  visible,
  onClose,
  product,
  onAddToCard,
}: ProductModal) {
  if (!product) return null;

  function handleAddToCard() {
    onAddToCard(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `https://448a-186-194-148-5.ngrok-free.app/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text color="#666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {product.ingredients?.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">
              Ingredientes
            </Text>

            <FlatList
              data={product.ingredients}
              style={{ marginTop: 16 }}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 200 }}
              renderItem={({ item: ingredient }) => (
                <Igredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Igredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>
          <Button onPress={handleAddToCard}>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
