import { IGlobalInterface } from "../../interfaces/IGlobal";
import React from "react";
import {
  ContainerMobile,
  ContainerPageMobile,
  ContentFooter,
  ContentMainMobile,
} from "./styled";
import { HeaderMobile } from "../../components/Header/HeaderMobile";
import { GlobalTheme } from "../../style/Global";
import { IconstNetwork } from "../../components/Icons";
import { animationsIcons } from "../../assets/images/animations";
import { ButtonNotColor } from "../../components/Buttons/alternative";

export const HomeMobile: React.FC<IGlobalInterface> = ({ className }) => {
  return (
    <ContainerMobile className={className}>
      <ContainerPageMobile>
        <HeaderMobile />

        <ContentMainMobile>
          <div className="content-header_info">
            <p className="top-welcome">Welcome to the future</p>
            <h1 className="top-title">Artificial Intelligence</h1>
          </div>

          <img
            style={{
              width: 300,
            }}
            src={animationsIcons.mainBackground}
            alt="background-logo"
            className="background-main"
          />

          <div className="content-header_bottom">
            <p className="top-description">
              Welcome to a future where intelligence meets innovation. Our
              cutting-edge artificial intelligence solutions are designed to
              elevate your business to new heights.
            </p>
          </div>

          <ButtonNotColor className="button-pay" text="Faça seu orçamento" />
        </ContentMainMobile>

        <ContentFooter backgroundColor={GlobalTheme.colors.primary} height={7}>
          <p className="footer-contact">Entre em contato</p>

          <IconstNetwork />
        </ContentFooter>
      </ContainerPageMobile>
    </ContainerMobile>
  );
};
