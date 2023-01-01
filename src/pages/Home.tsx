import { Link } from "react-router-dom";
import styled from "styled-components";
import image1 from "../assets/pexels-max-vakhtbovych-7166929-1600x800.jpg";
import image2 from "../assets/pexels-max-vakhtbovych-7166931-1600x800.jpg";
import image3 from "../assets/pexels-nguyễn-quang-9877452-1600x800.jpg";
import image4 from "../assets/pexels-nguyễn-quang-9877453-1600x800.jpg";
import image5 from "../assets/pexels-vidal-balielo-jr-11296126-1600x800.jpg";
import image6 from "../assets/pexels-vidal-balielo-jr-11296133-1600x800.jpg";
import image7 from "../assets/pexels-vidal-balielo-jr-11296134-1600x800.jpg";

import image8 from "../assets/stephanie-liverani-Zz5LQe-VSMY-unsplash2.jpg";
import image9 from "../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import image10 from "../assets/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg";

type Props = {};

const Wrapper = styled.main`
  .container {
    display: flex;
    justify-content: center;
  }
  #slider {
    width: 100%;
    height: 35vw;
    position: relative;
  }
  #slider img {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 800ms;
  }
  #slider img.selected {
    opacity: 1;
  }

  /* Orçar */

  #orcar {
    background-color: #fcddbc;
    height: 7rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  #orcar p {
    color: #456979;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0px 1rem;
    font-size: 1.1rem;
  }
  #orcar button {
    background-color: #456979;
    border-color: #456979;
    font-weight: bold;
    color: #ffffff;
    height: 2rem;
    width: 8rem;
    border-radius: 1rem;
    margin-left: 10px;
  }

  /* Cards */

  #depoimentos h1 {
    color: #ffffff;
    display: flex;
    justify-content: center;
    margin: 0 0 1rem 0;
    padding-top: 1rem;
    font-weight: 600;
  }
  .card h3 {
    margin-bottom: 0.6rem;
    color: #456979;
    font-weight: 700;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 980px;
    margin: 0 auto;
    grid-gap: 40px;
  }
  #depoimentos {
    background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    background-size: cover;
    background-position: right center;
    background-attachment: fixed;
    padding-bottom: 4rem;
  }
  .card {
    background-color: #fffffff7;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    box-shadow: 6px 6px 10px #456979b0;
    border-radius: 1rem;
    justify-content: flex-start;
  }
  .card .user {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
  }
  .stars i {
    color: gold;
    margin: 0rem 0.2rem 0.7rem 0rem;
  }

  /* Ética */

  .etica {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 980px;
    margin: 0 auto;
    grid-gap: 5rem;
  }
  .etica div {
    display: flex;
    align-items: center;
    color: #456979;
    height: 140px;
    flex-direction: column;
    justify-content: center;
  }
  .etica p {
    padding: 0 6px;
  }
  #pvissao {
    padding: 0 22px;
  }
  #pvalores {
    padding: 0 24px;
  }

  @media (max-width: 980px) {
    #slider {
      width: 100%;
      height: 48vw;
    }
    .menu {
      display: flex;
      align-items: center;
    }
    .cards {
      max-width: 890px;
      grid-gap: 30px;
    }
    .etica {
      max-width: 889px;
      grid-gap: 2rem;
    }
    .enderecos label {
      display: none;
    }
    footer span {
      padding: 0 5px;
    }
  }
  @media (max-width: 768px) {
    header nav a {
      font-size: 1rem;
    }
    #slider {
      height: 61vw;
    }
    .cards {
      max-width: 700px;
      grid-gap: 1.3rem;
    }
    .card h3 {
      font-size: 0.9rem;
    }
    .etica {
      max-width: 700px;
      grid-gap: 0.5rem;
    }
    .etica p {
      padding: 0 12px;
      font-size: 0.9rem;
    }
    footer span {
      padding: 0;
    }
    footer .enderecos {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 426px) {
    header div {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    header .midias {
      display: none;
    }
    #terceiradivdoheader {
      margin: 0.5rem;
      justify-content: center;
    }
    .menu {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    .menu li {
      margin: 0 1rem;
    }
    #slider {
      height: 66vh;
    }
    #orcar {
      padding: 1rem;
    }
    #orcar p {
      margin: 0px;
      font-size: 0.8rem;
    }
    #orcar button {
      width: 6rem;
      margin-left: 0px;
    }
    .cards {
      grid-template-columns: repeat(1, 1fr);
      margin: 1rem 3rem;
    }
    .etica {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem;
      grid-gap: 0;
    }
    .etica p {
      padding: 0 1rem;
      font-size: 1.1rem;
    }
    iframe {
      height: 390px;
    }
    footer {
      justify-content: center;
      padding: 1rem;
    }
    footer #logoCentral img {
      margin: 0px;
    }
    footer .enderecos {
      color: #fcddbc;
      font-size: 0.7rem;
    }
    footer p {
      margin-top: 1rem;
      font-size: 0.8rem;
    }
    footer p:last-child {
      margin-bottom: 1rem;
    }
    .entreemcontato {
      display: block;
    }
    footer span {
      padding: 0.5rem;
    }
  }
`;

const Home = (props: Props) => {
  return (
    <Wrapper>
      <section className="container">
        <div id="slider">
          <img className="selected" src={image1} alt="Image1" />
          <img src={image2} alt="Image2" />
          <img src={image3} alt="Image3" />
          <img src={image4} alt="Image4" />
          <img src={image5} alt="Image5" />
          <img src={image6} alt="Image6" />
          <img src={image7} alt="Image7" />
        </div>
      </section>

      <section id="orcar">
        <p>Deseja fazer um orçamento sem compromisso?</p>
        <Link to={"orcamento"}>
          <button name="orcar">Orçar</button>
        </Link>
      </section>

      <section id="depoimentos">
        <h1>Depoimentos dos clientes</h1>
        <div className="cards fundo">
          <div className="card">
            <img className="user" src={image8} alt="desenhocliente1" />
            <h3>Drª Maria S. Toloza</h3>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              Obrigada pela competência e trabalho, ficamos satisfeitas com a
              pontualidade da entrega e com o resultado final.
            </p>
          </div>
          <div className="card">
            <img className="user" src={image9} alt="desenhocliente3" />
            <h3>Tais Marcelino</h3>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              Você tinha razão quando disse que ia gostar dos armários, ficou
              maravilhoso, parabéns a você e equipe pelo lindo trabalho, Amamos
              o resultado!
            </p>
          </div>
          <div className="card">
            <img className="user" src={image10} alt="desenhocliente2" />
            <h3>Eduardo A. Bertolletti</h3>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              Ótima qualidade, gostei muito do trabalho de vocês, recomendarei
              para todos!
            </p>
          </div>
        </div>
      </section>

      <section className="etica">
        <div>
          <h3>Missão</h3>
          <p id="pmissao">
            Todas as pessoas do mundo satisfeitas em morar em suas residências.
          </p>
        </div>
        <div>
          <h3>Visão</h3>
          <p id="pvissao">
            Ser referência de móveis planejados em SJC e região até 2025.
          </p>
        </div>
        <div>
          <h3>Valores</h3>
          <p>Respeito, Empatia, Pontualidade, Cordialidade e Bom gosto.</p>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.544784435584!2d-45.97550012034721!3d-23.295984791014586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcb5c51a9ee55%3A0xbf9ac11e762ef805!2sLavalpa%20Centro%20Empresarial!5e0!3m2!1spt-BR!2sbr!4v1648146425235!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        /*style="border:0;" allowfullscreen=""*/ loading="lazy"
      ></iframe>
    </Wrapper>
  );
};

export default Home;
