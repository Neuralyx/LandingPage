import { logosIcons } from "../../assets/images/icons";
import { Button } from "../Buttons";
import { ChipsIcons } from "../Chips/Icons";
import { ContainerHeader } from "./styled";

export const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <div className="header-container left-header"></div>
      <div className="header-container right-header">
        <div className="header-text">
          <h1 className="text-h1">Home</h1>
          <h1 className="text-h1">Sobre a empresa</h1>
          <h1 className="text-h1">Portifólio</h1>
        </div>

        <div className="header-button">
          <Button text="Venha conhecer" />
        </div>

        <div className="header-languages">
          <ChipsIcons image={logosIcons.usdIMage} key="USD" />
          <ChipsIcons image={logosIcons.brazilIMage} key="BR" />
        </div>
      </div>
    </ContainerHeader>
  );
};
