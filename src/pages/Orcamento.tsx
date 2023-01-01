import styled from "styled-components";
import image from "../assets/woman.png";

type Props = {};

const Wrapper = styled.main`
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
  main div {
    display: flex;
    justify-content: center;
  }
  main div a {
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

const Orcamento = (props: Props) => {
  function Enviar() {
    const nome = document.getElementById("nomeid");
    const { valor }: any = nome;

    if (valor != "") {
      alert(
        "Obrigado sr(a) " +
          valor +
          " os seus dados foram encaminhados com sucesso"
      );
    }
  }

  return (
    <Wrapper>
      <h1>Obrigado pelo interesse!</h1>
      <h2>Pode nos chamar pelas redes sociais</h2>
      <div>
        <a
          target="_blank"
          rel="external"
          href="https://api.whatsapp.com/send?phone=5512981694974&text=Olá,%20meu%20amigo!"
        >
          <img src="images/whatsapp-50x50.png" alt="logo Whatsapp" />
        </a>
        <a
          className="instagramnomain"
          target="_blank"
          rel="external"
          href="https://www.instagram.com/okay.movelaria/"
        >
          <img src="images/instagram-50x50.png" alt="logo Instagram" />
        </a>
        <a
          target="_blank"
          rel="external"
          href="https://www.facebook.com/okaymovelaria.com.br"
        >
          <img src="images/facebook2-50x50.png" alt="logo Facebook" />
        </a>
      </div>
      <h2 id="segundoh2">Se preferir nos mande um E-mail</h2>
      <div id="formulario">
        <form name="meu_form">
          <p>Entre em contato</p>

          <input
            type="text"
            id="nomeid"
            placeholder="Seu nome"
            required
            name="nome"
          />
          <label htmlFor="nome">Nome</label>

          <input
            type="tel"
            id="foneid"
            placeholder="(xx)9xxxx-xxxx"
            name="fone"
          />
          <label htmlFor="fone">Fone</label>

          <input
            type="email"
            id="emailid"
            placeholder="seuemail@email.com"
            name="email"
          />
          <label htmlFor="email">Email</label>

          <textarea placeholder="Deixe sua mensagem :)"></textarea>

          <input
            type="submit"
            className="enviar"
            onClick={() => Enviar()}
            value="Enviar"
          />
        </form>
      </div>

      <script
        src="https://kit.fontawesome.com/f9e19193d6.js"
        crossOrigin="anonymous"
      ></script>
      <script src="./script-formulario.js"></script>
    </Wrapper>
  );
};

export default Orcamento;
