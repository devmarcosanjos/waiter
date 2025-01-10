import { Header } from "../Header";
import {
  CategoriesConteiner,
  Container,
  Footer,
  FooterContainer,
  MenuItem,
} from "./styles";

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <CategoriesConteiner></CategoriesConteiner>
        <MenuItem></MenuItem>
      </Container>
      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
}
