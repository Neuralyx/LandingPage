import React from "react";
import { ContainerPage, ContentMain, ContentPage } from "./style/Styled";
import { Header } from "./components/Header";
import { GeometryImageBackground } from "./components/Geometry";
import { geometryImages } from "./assets/images/geometry";
import { animationsIcons } from "./assets/images/animations";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { ButtonNotColor } from "./components/Buttons/alternative";

function App() {
  return (
    <ContainerPage>
      <GeometryImageBackground
        srcImage={geometryImages.leftBottom}
        styled={{ bottom: 0 }}
      />
      <GeometryImageBackground
        srcImage={geometryImages.rightTop}
        styled={{ top: 0, right: 0, width: 1000 }}
      />
      <GeometryImageBackground
        srcImage={geometryImages.leftTop}
        styled={{ top: 0, left: 0 }}
      />

      <ContentPage>
        <Header />

        <ContentMain>
          <div className="left-content">
            <div className="container-top">
              <p className="top-welcome">Welcome to the future</p>
              <h1>Artificial Intelligence</h1>
              <p className="top-description">
                Welcome to a future where intelligence meets innovation. Our
                cutting-edge artificial intelligence solutions are designed to
                elevate your business to new heights.
              </p>
            </div>
            <div className="container-bottom">
              <h5>Neuralyx Agência de Inteligência</h5>
              <p>Conheça o nosso trabalho</p>
            </div>

            <div className="container-icon-network">
              <FaInstagram size={30} />
              <FaWhatsapp size={30} />
            </div>

            <div className="container-button">
              <ButtonNotColor text="Faça seu orçamento" />
            </div>
          </div>

          <div className="right-content">
            <img
              style={{
                width: 500,
              }}
              src={animationsIcons.mainBackground}
              alt="background-logo"
              className="background-main"
            />
          </div>
        </ContentMain>
      </ContentPage>
    </ContainerPage>
  );
}

export default App;
