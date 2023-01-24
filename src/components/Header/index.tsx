import LogoWhatsapp from "../assets/whatsapp-35x35.png";
import LogoFacebook from "../assets/facebook2-35x35.png";
import LogoInstagram from "../assets/instagram-35x35.png";
import LogoOkay from "../assets/logo-okay-final-112x72.png";
import { Link } from "react-router-dom";
import { Wrapper } from "./Header";

type Props = {};

const Header = (props: Props) => {
  return (
    <Wrapper>
      <div className="midias">
        <p>Mídias Sociais</p>
        <div>
          <a
            target="_blank"
            rel="external"
            href="https://api.whatsapp.com/send?phone=5512981694974&text=Olá,%20gostaria%20de%20fazer%20um%20orçamento"
          >
            <img src={LogoWhatsapp} alt="logo Whatsapp" />
          </a>
          <a
            target="_blank"
            rel="external"
            href="https://www.facebook.com/okaymovelaria.com.br"
          >
            <img src={LogoFacebook} alt="logo Facebook" />
          </a>
          <a
            target="_blank"
            rel="external"
            href="https://www.instagram.com/okay.movelaria/"
          >
            <img src={LogoInstagram} alt="logo Instagram" />
          </a>
        </div>
      </div>
      <div>
        <Link to={"/"} id="logoCentral">
          <img src={LogoOkay} alt="logo da okay movelaria" />
        </Link>
      </div>
      <div id="terceiradivdoheader">
        <nav>
          <ul className="menu">
            <li>
              <Link to={"historia"}>Nossa História</Link>
            </li>
            <li>
              <Link to={"projetos"}>Projetos</Link>
            </li>
            <li>
              <Link to={"orcamento"}>Orçamento</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Header;
