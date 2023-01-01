import React from 'react'

type Props = {}

const History = (props: Props) => {
  return (
    <main className="flex">
        <div>
            <img src="images/logo-okay-final.png" alt="logo-okay"/>
            <div className="paragrafos">
                <p>A Okay Movelaria nasceu em 2019, na cidade de São José dos Campos-SP, 
                    observamos que através de móveis planejados é possível transformar e colocar personalidade
                     e modernidade no ambiente das pessoas.</p>
                <p>A Okay Movelaria transforma seu sonho em ter um ambiente com móveis planejados, em realidade! atuamos nos segmentos
                residencial, corporativo e comercial.
                </p>
            </div>
        </div>
        <div>
            <img id="eliana" src="images/1646337551647.jpg" alt="imagem-eliana"/>
            <p>Eliana Aparecida Ribeiro é formada pelo Centro Universitário Senac em Design de Interiores.
                Possui experiência de mais de 10 anos na área, atuando em diversas empresas de São josé dos Campos e Jacareí,
                em 2019 fundou a Okay Movelaria em que atua desde então.
            </p>
        </div>        
    </main>
  )
}

export default History;