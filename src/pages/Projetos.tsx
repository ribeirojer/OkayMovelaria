import React from "react";

type Props = {};

const Projetos = (props: Props) => {
  return (
    <main>
      <h1>Projetos</h1>
      <section className="flex">
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_0d702e5b886a4f718c5871ef4a8dc983_mv2.webp"
            alt="img1"
          />
          <div className="conteudo fade">Sala</div>
        </div>
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_31c22cae5bb5425080498b422367802e_mv2.webp"
            alt="img2"
          />
          <div className="conteudo fade">Cozinha</div>
        </div>
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_48ba549f7b4543f383106151d7c029df_mv2.webp"
            alt="img3"
          />
          <div className="conteudo fade">Banheiro</div>
        </div>
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_4c82f3b8c6984acf87a5fe61006ae4e6_mv2.webp"
            alt="img4"
          />
          <div className="conteudo fade">Sala</div>
        </div>
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_fc11cd78aea647bcaab9662cbe863647_mv2.webp"
            alt="img5"
          />
          <div className="conteudo fade">Churrasqueira</div>
        </div>
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_a678df9f45d845b49116d1fb51962470_mv2.webp"
            alt="img6"
          />
          <div className="conteudo fade">Bar</div>
        </div>
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_dd87f8114202499ca79983bd3f32a969_mv2.webp"
            alt="img7"
          />
          <div className="conteudo fade">Quarto</div>
        </div>
      </section>
      <h1>Serviços</h1>
      <h2>Consultório médico</h2>
      <section className="flex">
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_fa307d026cbc4e958f364e2f148f5abe_mv2_d_4288_2848_s_4_2.webp"
            alt="img9"
          />
          <div className="conteudo fade">Sala-1</div>
        </div>
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_826e126706c744ffbedeafc902ea1e32_mv2_d_4170_2782_s_4_2.webp"
            alt="img10"
          />
          <div className="conteudo fade">Sala-2</div>
        </div>
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_690b7b4d796f45158690275b440d5b37_mv2_d_3153_2848_s_4_2.webp"
            alt="img11"
          />
          <div className="conteudo fade">Recepção</div>
        </div>
        <div className="image-wrapper">
          <img
            className="blur"
            src="images/d60c02_e2af9770405b472ca27d05222689d490_mv2_d_2855_4476_s_4_2.webp"
            alt="img8"
          />
          <div className="conteudo fade">copa</div>
        </div>
      </section>
    </main>
  );
};

export default Projetos;
