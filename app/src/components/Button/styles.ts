import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ disabled }: { disabled: boolean }) =>
    disabled ? "#999" : "#d73035"};
  padding: 14px 25px;
  border-radius: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
