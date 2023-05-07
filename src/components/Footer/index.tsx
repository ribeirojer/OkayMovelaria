import LogoOkay from "../../assets/logo-okay-final-112x72.png";
import image1 from "../../assets/whatsapp-50x50.png";
import image2 from "../../assets/instagram-50x50.png";
import image3 from "../../assets/facebook2-50x50.png";
import { Wrapper } from "./Footer";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div id="logookayrodape">
        <a id="logoCentral" href="index.html">
          <img
            src={LogoOkay}
            alt="logo da okay movelaria"
          />
        </a>
      </div>
      <div className="enderecos">
        <p>
          <i className="fa-solid fa-location-dot"></i>{" "}
          <label>Lavalpa Centro Empresarial - </label>Av. Edouard Six, 540 -
          Jardim Paraiba, Jacareí - SP
        </p>
        <p>
          <i className="fa-solid fa-envelope-circle-check"></i>{" "}
          okaymovelariacriativa@gmail.com{" "}
          <i className="fa-solid fa-mobile-screen-button"></i> (12)98169-4974
        </p>
        <p className="entreemcontato">Entre em contato: </p>
      </div>
      <div>
        <span>
          <a
            target="_blank"
            rel="external"
            href="https://api.whatsapp.com/send?phone=5512981694974&text=Olá,%20gostaria%20de%20fazer%20um%20orçamento"
          >
            <img src={image1} alt="logo Whatsapp" />
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="external"
            href="https://www.instagram.com/okay.movelaria/"
          >
            <img src={image2} alt="logo Instagram" />
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="external"
            href="https://www.facebook.com/okaymovelaria.com.br"
          >
            <img src={image3} alt="logo Facebook" />
          </a>
        </span>
      </div>
    </Wrapper>
  );
};

export default Footer;
