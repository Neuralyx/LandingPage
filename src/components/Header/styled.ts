import styled from "styled-components";
import { GlobalTheme } from "../../style/Global";

export const ContainerHeader = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;

  .header-container {
    flex-direction: column;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
  }

  .header-container .left-header,
  .header-container .right-header {
    width: 50%;
    height: 40px;
  }

  .header-container.right-header {
    display: flex;

    align-items: center;
    flex-direction: row;
    justify-content: space-around;

    .header-text {
      justify-content: space-between;
      width: 400px;
      display: flex;
      flex-direction: row;
    }

    .header-text .text-h1 {
      color: ${GlobalTheme.colors.white};
      font-size: 18px;
      font-weight: 300;
      font-family: "Roboto", sans-serif;
    }
  }

  .header-languages {
    min-width: 70px;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1100px) {
    .header-container .left-header {
      display: none;
      width: 0px;
    }
    .header-container .right-header {
      width: 100%;
      border: 1px solid black;
    }
  }
`;
