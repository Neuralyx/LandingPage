import styled from "styled-components";
import { GlobalTheme } from "@/style/Global";

export const ContainerButton = styled.button`
  width: 208px;
  height: 40px;
  border-radius: 20px;
  outline: none;
  font-size: 18px;
  border: none;
  color: ${GlobalTheme.colors.gray};
  background: ${GlobalTheme.colors.medium};

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    transform: scale(1.09);
    transition: all 0.3s ease-in-out;
  }
`;
