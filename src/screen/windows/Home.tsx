import { IGlobalInterface } from "@/interfaces/IGlobal";
import React from "react";
import { animationsIcons } from "../../assets/images/animations";
import { geometryImages } from "../../assets/images/geometry";
import { ButtonNotColor } from "../../components/Buttons/alternative";
import { GeometryImageBackground } from "../../components/Geometry";
import { Header } from "../../components/Header";
import { ContentMain, ContentPage } from "../../style/Styled";
import { ContainerWindows } from "./styled";
import { IconstNetwork } from "../../components/Icons";

export const HomeWindows: React.FC<IGlobalInterface> = ({ className }) => {
  return (
    <ContainerWindows className={className}>
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

            <IconstNetwork />

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
    </ContainerWindows>
  );
};
