import styled from "styled-components";

export const Wrapper = styled.main`
  #slider {
    width: 100%;
    height: 35vw;
    overflow-x: hidden;
    position: relative;
  }
  #slider img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  .slide-enter {
    transform: translateX(100%);
  }

  .slide-enter-active {
    transform: translateX(0%);
    transition: transform 500ms ease;
  }

  .slide-exit {
    transform: translateX(0%);
  }

  .slide-exit-active {
    transform: translateX(-100%);
    transition: transform 500ms ease;
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
