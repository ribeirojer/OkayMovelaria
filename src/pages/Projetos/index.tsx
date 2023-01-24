import image1 from "../assets/d60c02_0d702e5b886a4f718c5871ef4a8dc983_mv2.webp";
import image2 from "../assets/d60c02_31c22cae5bb5425080498b422367802e_mv2.webp";
import image3 from "../assets/d60c02_48ba549f7b4543f383106151d7c029df_mv2.webp";
import image4 from "../assets/d60c02_4c82f3b8c6984acf87a5fe61006ae4e6_mv2.webp";
import image5 from "../assets/d60c02_fc11cd78aea647bcaab9662cbe863647_mv2.webp";
import image6 from "../assets/d60c02_a678df9f45d845b49116d1fb51962470_mv2.webp";
import image7 from "../assets/d60c02_dd87f8114202499ca79983bd3f32a969_mv2.webp";

import image8 from "../assets/d60c02_fa307d026cbc4e958f364e2f148f5abe_mv2_d_4288_2848_s_4_2.webp";
import image9 from "../assets/d60c02_826e126706c744ffbedeafc902ea1e32_mv2_d_4170_2782_s_4_2.webp";
import image10 from "../assets/d60c02_690b7b4d796f45158690275b440d5b37_mv2_d_3153_2848_s_4_2.webp";
import image11 from "../assets/d60c02_e2af9770405b472ca27d05222689d490_mv2_d_2855_4476_s_4_2.webp";
import { Wrapper } from "./Projetos";

type Props = {};

const Projetos = (props: Props) => {
  const projects = [
    { image: image1, content: "Sala" },
    { image: image2, content: "Cozinha" },
    { image: image3, content: "Banheiro" },
    { image: image4, content: "Sala" },
    { image: image5, content: "Churrasqueira" },
    { image: image6, content: "Bar" },
    { image: image7, content: "Quarto" },
  ];
  const sevices = [
    { image: image8, content: "Sala-1" },
    { image: image9, content: "Sala-2" },
    { image: image10, content: "Recepção" },
    { image: image11, content: "copa" },
  ];

  return (
    <Wrapper>
      <h1>Projetos</h1>
      <section className="flex">
        {projects.map((item) => {
          return (
            <div className="image-wrapper">
              <img className="blur" src={item.image} alt="img1" />
              <div className="conteudo fade">{item.content}</div>
            </div>
          );
        })}
      </section>
      <h1>Serviços</h1>
      <h2>Consultório médico</h2>
      <section className="flex">
        {sevices.map((item) => {
          return (
            <div className="image-wrapper">
              <img className="blur" src={item.image} alt="img1" />
              <div className="conteudo fade">{item.content}</div>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};

export default Projetos;
