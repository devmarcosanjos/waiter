import { useState } from "react";
import { Button } from "../Button";
import { Categories } from "../Categories";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { TableModal } from "../TableModal";
import {
  CategoriesConteiner,
  CenterContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";
import { Cart } from "../Cart";
import { CartItem } from "../../types/cardItem";
import { Product } from "../../types/product";
import { ActivityIndicator } from "react-native";
import { Empty } from "../../assets/Icons/Empty";
import { Text } from "../Text";
import { Category } from "../../types/category";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectTable, setSelectTable] = useState("");
  const [cardItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading] = useState(false);
  const [products] = useState<Product[]>([]);
  const [categories] = useState<Category[]>([]);

  function handleSaveTable(table: string) {
    setSelectTable(table);
  }

  function handleCancelOrder() {
    setSelectTable("");
    setCartItems([]);
  }

  function handleAddToCard(product: Product) {
    if (!selectTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cardItem) => cardItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCardItems = [...prevState];
      newCardItems[itemIndex] = {
        ...newCardItems[itemIndex],
        quantity: newCardItems[itemIndex].quantity + 1,
      };

      return newCardItems;
    });
  }

  function handleDecrementCardItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cardItem) => cardItem.product._id === product._id
      );
      const item = prevState[itemIndex];
      const newCardItems = [...prevState];

      if (item.quantity === 1) {
        newCardItems.splice(itemIndex, 1);

        return newCardItems;
      }

      newCardItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };
      return newCardItems;
    });
  }

  function handleConfirmOrder() {
    setSelectTable("");
    setCartItems([]);
  }

  return (
    <>
      <Container>
        <Header selectTable={selectTable} onCancelOrder={handleCancelOrder} />
        {isLoading && (
          <CenterContainer>
            <ActivityIndicator color="#D73035" size="large" />
          </CenterContainer>
        )}
        {!isLoading && (
          <>
            <CategoriesConteiner>
              <Categories categories={categories} />
            </CategoriesConteiner>
            {products.length > 0 ? (
              <MenuContainer>
                <Menu onAddToCard={handleAddToCard} products={products} />
              </MenuContainer>
            ) : (
              <CenterContainer>
                <Empty />
                <Text color="#666" style={{ marginTop: 24 }}>
                  Nenhum produto foi encontrado
                </Text>
              </CenterContainer>
            )}
          </>
        )}
      </Container>
      <Footer>
        <FooterContainer>
          {!selectTable && (
            <Button
              onPress={() => setIsTableModalVisible(true)}
              disabled={isLoading}
            >
              Novo Pedido
            </Button>
          )}
          {selectTable && (
            <Cart
              cartItems={cardItems}
              onAdd={handleAddToCard}
              onDecrement={handleDecrementCardItem}
              onConfirmOrder={handleConfirmOrder}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
