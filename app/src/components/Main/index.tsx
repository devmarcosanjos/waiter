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
import { products } from "../../mocks/products";
import { Product } from "../../types/product";
import { Item } from "../Cart/style";
import { ActivityIndicator } from "react-native";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectTable, setSelectTable] = useState("");
  const [cardItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading] = useState(false);

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
              <Categories />
            </CategoriesConteiner>
            <MenuContainer>
              <Menu onAddToCard={handleAddToCard} />
            </MenuContainer>
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
