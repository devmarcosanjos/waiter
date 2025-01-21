import { Modal, Platform, TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Form, Header, Input, ModalBody, Overlay } from "./styles";
import { Close } from "../../assets/Icons/Close";
import { Button } from "../Button";
import { setStatusBarStyle } from "expo-status-bar";
import { useState } from "react";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;

  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState("");

  function handleSave() {
    setTable("");
    onSave(table);
    onClose();
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <Header>
            <Text weight="600">Informa a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />
          </Form>

          <Button onPress={handleSave} disabled={table.length === 0}>
            Salvar
          </Button>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
