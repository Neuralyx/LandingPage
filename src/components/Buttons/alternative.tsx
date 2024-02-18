import { IGlobalInterface } from "@/interfaces/IGlobal";
import { GlobalTheme } from "../../style/Global";
import { ContainerButton } from "./styled";

interface IButton extends IGlobalInterface {
  text: string;
}

export const ButtonNotColor: React.FC<IButton> = ({ text, className }) => {
  return (
    <ContainerButton
      className={className}
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
