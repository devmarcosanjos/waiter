import { useState } from "react";
import { Button } from "../Button";
import { Categories } from "../Categories";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { TableModal } from "../TableModal";
import {
  CategoriesConteiner,
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

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectTable, setSelectTable] = useState("");
  const [cardItems, setCartItems] = useState<CartItem[]>([
    {
      quantity: 1,
      product: products[0],
    },
    {
      quantity: 2,
      product: products[1],
    },
  ]);

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
        <CategoriesConteiner>
          <Categories />
        </CategoriesConteiner>
        <MenuContainer>
          <Menu onAddToCard={handleAddToCard} />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          {!selectTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
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
