import { ContainerPage } from "../style/Styled";
import { HomeMobile } from "./mobile/Home";
import { HomeWindows } from "./windows/Home";

export const Home = () => {
  return (
    <ContainerPage>
      <HomeWindows className="home-windows" />
      <HomeMobile className="home-mobile" />
    </ContainerPage>
  );
};
