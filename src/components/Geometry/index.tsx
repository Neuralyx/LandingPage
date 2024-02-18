import { ContainerGeometry, IPositionGeometry } from "./styled";

interface IGeometry {
  srcImage: string;
  styled: IPositionGeometry;
}

export const GeometryImageBackground: React.FC<IGeometry> = ({
  srcImage,
  styled,
}) => {
  return <ContainerGeometry src={srcImage} {...styled} />;
};
