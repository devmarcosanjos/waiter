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

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectTable, setSelectTable] = useState("");

  function handleSaveTable(table: string) {
    setSelectTable(table);
  }

  function handleCancelOrder() {
    setSelectTable("");
  }

  return (
    <>
      <Container>
        <Header selectTable={selectTable} onCancelOrder={handleCancelOrder} />
        <CategoriesConteiner>
          <Categories />
        </CategoriesConteiner>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          {!selectTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo Pedido
            </Button>
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
