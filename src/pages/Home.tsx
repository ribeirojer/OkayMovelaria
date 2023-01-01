import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <section className="container">
        <div id="slider">
          <img
            className="selected"
            src="images/pexels-max-vakhtbovych-7166929-1600x800.jpg"
            alt="Image1"
          />
          <img
            src="images/pexels-max-vakhtbovych-7166931-1600x800.jpg"
            alt="Image2"
          />
          <img
            src="images/pexels-nguyễn-quang-9877452-1600x800.jpg"
            alt="Image3"
          />
          <img
            src="images/pexels-nguyễn-quang-9877453-1600x800.jpg"
            alt="Image4"
          />
          <img
            src="images/pexels-vidal-balielo-jr-11296126-1600x800.jpg"
            alt="Image5"
          />
          <img
            src="images/pexels-vidal-balielo-jr-11296133-1600x800.jpg"
            alt="Image6"
          />
          <img
            src="images/pexels-vidal-balielo-jr-11296134-1600x800.jpg"
            alt="Image7"
          />
        </div>
      </section>
      <section id="orcar">
        <p>Deseja fazer um orçamento sem compromisso?</p>
        <a href="orcamento.html">
          <button name="orcar">Orçar</button>
        </a>
      </section>
      <section id="depoimentos">
        <h1>Depoimentos dos clientes</h1>
        <div className="cards fundo">
          <div className="card">
            <img
              className="user"
              src="images/stephanie-liverani-Zz5LQe-VSMY-unsplash2.jpg"
              alt="desenhocliente1"
            />
            <h3>Drª Maria S. Toloza</h3>
            <div className="stars">
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
            </div>
            <p>
              Obrigada pela competência e trabalho, ficamos satisfeitas com a
              pontualidade da entrega e com o resultado final.
            </p>
          </div>
          <div className="card">
            <img
              className="user"
              src="images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
              alt="desenhocliente3"
            />
            <h3>Tais Marcelino</h3>
            <div className="stars">
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
            </div>
            <p>
              Você tinha razão quando disse que ia gostar dos armários, ficou
              maravilhoso, parabéns a você e equipe pelo lindo trabalho, Amamos
              o resultado!
            </p>
          </div>
          <div className="card">
            <img
              className="user"
              src="images/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg"
              alt="desenhocliente2"
            />
            <h3>Eduardo A. Bertolletti</h3>
            <div className="stars">
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
              <img src="images/estrela-25x25.png" alt="imagemestrela" />
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
    </main>
  );
};

export default Home;
