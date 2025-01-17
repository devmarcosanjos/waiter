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
  }

  function handleAddToCard(product: Product) {
    alert(product.name);
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
          {selectTable && <Cart cartItems={cardItems} />}
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
