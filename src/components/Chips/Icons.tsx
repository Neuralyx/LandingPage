import { ContainerIcon } from "./styled";

interface IChipIcon {
  image: string;
  key: string;
}

export const ChipsIcons: React.FC<IChipIcon> = ({ image, key }) => {
  return <ContainerIcon src={image} key={key} />;
};
