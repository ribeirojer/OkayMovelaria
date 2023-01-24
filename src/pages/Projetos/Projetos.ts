import styled from "styled-components";

export const Wrapper = styled.main`
  /* main */

  .flex img {
    max-width: 100%;
    display: block;
    border-radius: 5px;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 764px;
  }
  .flex > div {
    flex: 1 1 200px;
    margin: 10px;
  }
  .image-wrapper {
    position: relative;
    overflow: hidden;
  }
  .image-wrapper > img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  .image-wrapper > .conteudo {
    position: absolute;
    inset: 0;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
  .image-wrapper > img,
  .image-wrapper > .conteudo {
    transition: 200ms ease-in-out;
  }
  .image-wrapper:hover > .conteudo.fade {
    opacity: 1;
  }
  .image-wrapper > .conteudo.fade {
    opacity: 0;
  }
  .image-wrapper:hover > img.blur {
    filter: blur(4px);
  }
  h1 {
    color: #456979;
    display: flex;
    justify-content: center;
  }
  h2 {
    color: #456979;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
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
