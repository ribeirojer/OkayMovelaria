import styled from "styled-components";
import image from "../assets/woman.png";

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
            <img src="images/whatsapp-35x35.png" alt="logo Whatsapp" />
          </a>
          <a
            target="_blank"
            rel="external"
            href="https://www.facebook.com/okaymovelaria.com.br"
          >
            <img src="images/facebook2-35x35.png" alt="logo Facebook" />
          </a>
          <a
            target="_blank"
            rel="external"
            href="https://www.instagram.com/okay.movelaria/"
          >
            <img src="images/instagram-35x35.png" alt="logo Instagram" />
          </a>
        </div>
      </div>
      <div>
        <a id="logoCentral" href="index.html">
          <img
            src="images/logo-okay-final-112x72.png"
            alt="logo da okay movelaria"
          />
        </a>
      </div>
      <div id="terceiradivdoheader">
        <nav>
          <ul className="menu">
            <li>
              <a href="historia.html">Nossa História</a>
            </li>
            <li>
              <a href="projetos.html">Projetos</a>
            </li>
            <li>
              <a href="orcamento.html">Orçamento</a>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Header;
