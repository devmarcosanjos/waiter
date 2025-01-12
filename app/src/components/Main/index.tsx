import { Button } from "../Button";
import { Categories } from "../Categories";
import { Header } from "../Header";
import { Menu } from "../Menu";
import {
  CategoriesConteiner,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <CategoriesConteiner>
          <Categories />
        </CategoriesConteiner>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          <Button onPress={() => alert("Novo pedido")}>Novo Pedido</Button>
        </FooterContainer>
      </Footer>
    </>
  );
}
