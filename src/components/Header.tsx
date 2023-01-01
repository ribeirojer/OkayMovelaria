import styled from "styled-components";
import LogoWhatsapp from "../assets/whatsapp-35x35.png";
import LogoFacebook from "../assets/facebook2-35x35.png";
import LogoInstagram from "../assets/instagram-35x35.png";
import LogoOkay from "../assets/logo-okay-final-112x72.png";
import { Link } from "react-router-dom";

type Props = {};

const Wrapper = styled.header`
  background: linear-gradient(90deg, #fcddbc, #ef959d, #456979);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  div {
    width: 33%;
    display: flex;
    justify-content: center;
  }
  .midias {
    display: block;
  }
  .midias div {
    width: 100%;
    justify-content: flex-start;
  }
  .midias img {
    width: 2rem;
    height: 2rem;
  }
  .midias a {
    margin: 0.1rem 0.3rem;
  }
  .midias p {
    margin-left: 0.3rem;
    font-weight: 500;
    color: #456979;
  }
  #logoCentral img {
    height: 72px;
    margin: 8px 0px 0px 0px;
  }
  #terceiradivdoheader {
    display: flex;
    justify-content: flex-end;
  }
  .menu {
    display: flex;
  }
  .menu ul,
  li {
    list-style: none;
    font-size: 1.2rem;
  }
  header nav a {
    text-decoration: none;
    color: #ffffff;
    transition: 0.5s;
  }
  header nav a:hover {
    text-decoration: none;
    color: #fcddbc;
  }
  .menu li {
    margin-left: 1rem;
  }
`;

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
