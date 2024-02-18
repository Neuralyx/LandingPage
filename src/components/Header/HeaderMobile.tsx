import { MenuDefault } from "../Menu";
import { ContainerHeaderMobile } from "./styled";

export const HeaderMobile = () => {
  return (
    <ContainerHeaderMobile>
      <MenuDefault />

      <h1 className="header-h1_mobile">Neuralyx</h1>
    </ContainerHeaderMobile>
  );
};
