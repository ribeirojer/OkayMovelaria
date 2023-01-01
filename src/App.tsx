import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
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
      </header>
      <Outlet/>
      <footer>
        <div id="logookayrodape">
          <a id="logoCentral" href="index.html">
            <img
              src="images/logo-okay-final-112x72.png"
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
              <img src="images/whatsapp-50x50.png" alt="logo Whatsapp" />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="external"
              href="https://www.instagram.com/okay.movelaria/"
            >
              <img src="images/instagram-50x50.png" alt="logo Instagram" />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="external"
              href="https://www.facebook.com/okaymovelaria.com.br"
            >
              <img src="images/facebook2-50x50.png" alt="logo Facebook" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
