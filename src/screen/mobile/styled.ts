import { GlobalTheme } from "../../style/Global";
import styled from "styled-components";

interface IStyled {
  backgroundColor?: string;
  height?: number;
}

export const GlobaStyled = styled.div<IStyled>`
  background-color: ${(props) =>
    props.backgroundColor || GlobalTheme.colors.primary};
  height: ${(props) => `${props.height}` || 100}vh;
  color: ${GlobalTheme.colors.white};
`;

export const ContainerMobile = styled(GlobaStyled)`
  background: linear-gradient(#1f0740 0%, #37067b 100%);
`;

export const ContainerPageMobile = styled.div``;

export const ContentMainMobile = styled.div`
  padding: 10px;
  max-width: 450px;
  margin: auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;

  .content-header_info .top-welcome {
    font-size: 20px;
  }

  .content-header_info .top-title {
    font-size: 60px;
    line-height: 60px;
    margin: 10px 0;
  }

  .button-pay {
    margin-top: 50px;

    margin-bottom: 100px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentFooter = styled(GlobaStyled)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;

  .footer-contact {
    font-size: 21px;
  }
`;
