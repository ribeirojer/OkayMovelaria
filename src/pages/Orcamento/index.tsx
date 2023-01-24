import image1 from "../assets/whatsapp-50x50.png";
import image2 from "../assets/instagram-50x50.png";
import image3 from "../assets/facebook2-50x50.png";
import { Wrapper } from "./Orcamento";

type Props = {};

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
          <img src={image1} alt="logo Whatsapp" />
        </a>
        <a
          className="instagramnomain"
          target="_blank"
          rel="external"
          href="https://www.instagram.com/okay.movelaria/"
        >
          <img src={image2} alt="logo Instagram" />
        </a>
        <a
          target="_blank"
          rel="external"
          href="https://www.facebook.com/okaymovelaria.com.br"
        >
          <img src={image3} alt="logo Facebook" />
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
