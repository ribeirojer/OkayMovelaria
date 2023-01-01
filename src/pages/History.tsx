import styled from "styled-components";
import image1 from "../assets/logo-okay-final.png";
import image2 from "../assets/1646337551647.jpg";

type Props = {};

const Wrapper = styled.main`
  max-width: 764px;
  margin: 0 auto;

  div {
    display: flex;
    margin: 1rem 0;
    background-color: white;
    padding: 1rem;
    border: 1px dashed rebeccapurple;
  }
  .paragrafos {
    display: flex;
    flex-wrap: wrap;
    border: none;
    padding: 0px;
    margin: 0 0 1rem 0;
  }
  .paragrafos p {
    margin: 1rem 0 0 0;
  }
  div img {
    margin-right: 1rem;
    border-radius: 5px;
    max-width: 150px;
    object-fit: contain;
  }
  div p {
    text-align: initial;
    text-indent: 3rem;
  }

  @media (max-width: 1023px) {
    header nav a {
      font-size: 0.9rem;
    }
    .menu {
      align-items: center;
    }
    footer {
      position: unset;
      flex-wrap: nowrap;
    }
    .enderecos label {
      display: none;
    }
    .enderecos {
      font-size: 0.9rem;
    }
    footer span {
      padding: 0;
    }
  }
  @media (max-width: 425px) {
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

    /* main */

    main div img {
      display: none;
    }
    #eliana {
      display: block;
    }
    /* footer */

    footer {
      justify-content: center;
      padding: 1rem;
      position: static;
      flex-wrap: wrap;
    }
    .entreemcontato {
      display: block;
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
  }
`;

const History = (props: Props) => {
  return (
    <Wrapper className="flex">
      <div>
        <img src={image1} alt="logo-okay" />
        <div className="paragrafos">
          <p>
            A Okay Movelaria nasceu em 2019, na cidade de São José dos
            Campos-SP, observamos que através de móveis planejados é possível
            transformar e colocar personalidade e modernidade no ambiente das
            pessoas.
          </p>
          <p>
            A Okay Movelaria transforma seu sonho em ter um ambiente com móveis
            planejados, em realidade! atuamos nos segmentos residencial,
            corporativo e comercial.
          </p>
        </div>
      </div>
      <div>
        <img id="eliana" src={image2} alt="imagem-eliana" />
        <p>
          Eliana Aparecida Ribeiro é formada pelo Centro Universitário Senac em
          Design de Interiores. Possui experiência de mais de 10 anos na área,
          atuando em diversas empresas de São josé dos Campos e Jacareí, em 2019
          fundou a Okay Movelaria em que atua desde então.
        </p>
      </div>
    </Wrapper>
  );
};

export default History;
