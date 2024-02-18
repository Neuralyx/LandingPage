import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { ContainerIcons } from "./styled";

export const IconstNetwork = () => {
  return (
    <ContainerIcons>
      <FaInstagram
        size={30}
        onClick={() =>
          (window.location.href = "https://www.instagram.com/neuralyx.dev/")
        }
      />
      <FaWhatsapp
        size={30}
        onClick={() => (window.location.href = "https://wa.link/1mc4h6")}
      />
    </ContainerIcons>
  );
};
