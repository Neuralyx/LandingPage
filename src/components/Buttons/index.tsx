import { ContainerButton } from "./styled";

interface IButton {
  text: string;
}

export const Button: React.FC<IButton> = ({ text }) => {
  return <ContainerButton>{text}</ContainerButton>;
};
