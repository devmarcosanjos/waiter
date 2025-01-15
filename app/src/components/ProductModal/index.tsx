import { Modal } from "react-native";
import { Text } from "../Text";
import { Product } from "../../types/product";
import { CloseButton, Header, Image, ModalBody } from "./styles";
import { Close } from "../Icons/Close";

interface ProductModal {
  visible: boolean;
  onClose: () => void;

  product: null | Product;
}

export function ProductModal({ visible, onClose, product }: ProductModal) {
  if (!product) return null;

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
      </ModalBody>
    </Modal>
  );
}
