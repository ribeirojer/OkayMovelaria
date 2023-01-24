import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  h1,
  h2 {
    color: #456979;
  }
  div {
    display: flex;
    justify-content: center;
  }
  div a {
    margin: 1rem;
  }
  form {
    font-size: 1rem;
    background-color: #456979;
    max-width: 500px;
    border-radius: 0.5rem;
  }
  form p {
    font-size: 1rem;
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  input,
  textarea {
    width: 200px;
    padding: 10px;
    color: black;
    margin-left: 20px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid;
  }
  input:hover,
  textarea:hover,
  input:focus,
  textarea:focus {
    border-color: #000000;
    color: #000000;
    font-weight: bold;
  }
  .enviar {
    background-color: #ef959d;
    height: 2.5rem;
    width: 100px;
    border-radius: 5px;
    border: 1px solid;
    color: black;
    margin: 10px 0 20px 20px;
  }
  textarea {
    width: 400px;
    height: 120px;
    line-height: 20px;
    max-width: 400px;
  }
  form label {
    margin-left: 20px;
    color: #ffffff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    header nav a {
      font-size: 1rem;
    }
    .menu {
      align-items: center;
    }
    footer {
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

    main span {
      margin: 0 0.5rem;
    }
    h1 {
      font-size: 1.5rem;
      margin: 2rem 0;
    }
    h2 {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    #segundoh2,
    #formulario {
      display: none;
    }

    /* footer */

    footer {
      flex-direction: column;
      width: 100%;
    }
    footer #logoCentral img {
      margin: 0px;
      filter: invert(1);
    }
    footer .enderecos {
      color: #fcddbc;
      font-size: 0.7rem;
    }
    footer p {
      margin-top: 1rem;
      font-size: 0.8rem;
    }
    .entreemcontato {
      display: block;
    }
    footer p:last-child {
      margin-bottom: 1rem;
    }
  }
`;
