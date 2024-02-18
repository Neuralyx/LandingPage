import styled from "styled-components";
import { GlobalTheme } from "./Global";

const ContainerPage = styled.div`
  .home-mobile {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    .home-windows {
      display: none;
    }

    .home-mobile {
      display: block;
    }
  }
`;

const ContentPage = styled.div``;

const ContentMain = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin: 100px auto;

  .left-content {
    height: 100%;
    width: 600px;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  .left-content .container-top,
  .left-content .container-bottom {
    display: flex;
    flex-direction: column;
    color: ${GlobalTheme.colors.dark};
  }
  .left-content .container-top {
    gap: 20px;
    .top-welcome {
      font-size: 30px;
    }

    h1 {
      font-size: 90px;
      line-height: 0.8;
    }

    .top-description {
      font-size: 18px;
    }
  }

  .left-content .container-bottom {
    margin-top: 60px;
    gap: 5px;

    h5 {
      font-size: 30px;
      font-weight: 400;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    p {
      font-size: 18px;
    }
  }

  .left-content .container-button {
    margin-top: 100px;
  }
`;

export { ContainerPage, ContentMain, ContentPage };
