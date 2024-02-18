import { GlobalTheme } from "../../style/Global";
import { ContainerButton } from "./styled";

interface IButton {
  text: string;
}

export const ButtonNotColor: React.FC<IButton> = ({ text }) => {
  return (
    <ContainerButton
      style={{
        background: "white",
        color: GlobalTheme.colors.primary,
        width: 300,
        border: `1px solid ${GlobalTheme.colors.primary}`,
      }}
    >
      {text}
    </ContainerButton>
  );
};
