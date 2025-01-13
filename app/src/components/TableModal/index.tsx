import { Modal, Platform, TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Form, Header, Input, ModalBody, Overlay } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";

export function TableModal() {
  return (
    <Modal transparent>
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <Header>
            <Text weight="600">Informa a mesa</Text>

            <TouchableOpacity>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
            />
          </Form>

          <Button onPress={() => alert("salvar")}>Salvar</Button>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
