import styled from "styled-components";

export interface IPositionGeometry {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
}

export const ContainerGeometry = styled.img<IPositionGeometry>`
  position: absolute;
  z-index: -1;
  left: ${(props) => props?.left}px;
  right: ${(props) => props?.right}px;
  top: ${(props) => props?.top}px;
  bottom: ${(props) => props?.bottom}px;
  height: ${(props) => props?.height}px;
  width: ${(props) => props?.width}px;
  filter: drop-shadow(2px 10px 10px rgba(0, 0, 0, 0.5));
`;
