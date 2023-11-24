import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'
import background from '../assets/Mask.svg'

import oxjean from '../assets/speakers2/0xjean.jpeg'
import alan from '../assets/speakers2/alan.jpg'
import alejandro from '../assets/speakers2/alejandro.png'
import camila from '../assets/speakers2/camila.jpeg'
import damian from '../assets/speakers2/damian.png'
import camilaR from '../assets/speakers2/camilaR.jpeg'
import cryptoChica from '../assets/speakers2/cryptoChica.png'
import matias from '../assets/speakers2/matias.png'
import gabriel from '../assets/speakers2/gabriel.jpeg'
import mariano from '../assets/speakers2/mariano.jpeg'
import martin from '../assets/speakers2/martin.jpeg'
import nadia from '../assets/speakers2/nadia.jpeg'
import vitalik from '../assets/speakers2/vitalik.png'
import stani from '../assets/speakers2/stani.png'
import patricio from '../assets/speakers2/patricio.jpeg'
import santiago from '../assets/speakers2/santiago.jpeg'
import georgios from '../assets/speakers2/georgios.jpeg'
import gerrit from '../assets/speakers2/gerrit.jpg'
import jose from '../assets/speakers2/jose.jpg'
import marcelo from '../assets/speakers2/marcelo.jpg'
import sebastian from '../assets/speakers2/sebastian.jpeg'
import nicolas from '../assets/speakers2/nicolas.jpg'
import julien from '../assets/speakers2/julien.jpeg'
import fernanda from '../assets/speakers2/fernanda.jpeg'
import alejo from '../assets/speakers2/alejo.jpeg'
import alejoL from '../assets/speakers2/alejoL.jpg'
import patricioW from '../assets/speakers2/patricioW.jpg'
import skeletor from '../assets/speakers2/skeletor.jpg'
import aya from '../assets/speakers2/aya.jpeg'
import arjun from '../assets/speakers2/arjun.jpeg'
import rodrigo from '../assets/speakers2/rodrigo.jpg'
import manuel from '../assets/speakers2/manuel.jpg'
import nahuel from '../assets/speakers2/nahuel.JPG'
import demianD from '../assets/speakers2/demianD.jpg'
import harsh from '../assets/speakers2/harsh.jpeg'
import julian from '../assets/speakers2/julian.jpg'
import matiasN from '../assets/speakers2/matiasN.jpg'
import oli from '../assets/speakers2/oli.jpeg'
import antonela from '../assets/speakers2/antonela.png'
import vicky from '../assets/speakers2/vicky.jpeg'
import gino from '../assets/speakers2/gino.jpeg'
import adrian from '../assets/speakers2/adrian.jpeg'
import martinB from '../assets/speakers2/martinB.jpeg'
import diego from '../assets/speakers2/diego.jpeg'
import juanManuel from '../assets/speakers2/juanManuel.png'
import evin from '../assets/speakers2/evin.jpg'
import henry from '../assets/speakers2/henry.jpg'
import wade from '../assets/speakers2/wade.jpeg'
import sxysun from '../assets/speakers2/sxysun.jpg'
import shannon from '../assets/speakers2/shannon.jpeg'
import pablo from '../assets/speakers2/pablo.jpg'
import agusx1211 from '../assets/speakers2/agusx1211.jpg'
import renat from '../assets/speakers2/renat.jpg'
import lucas from '../assets/speakers2/lucas.jpg'
import cristian from '../assets/speakers2/cristian.jpg'
import juani from '../assets/speakers2/juani.jpg'
import maxi from '../assets/speakers2/maxi.jpeg'
import patricioM from '../assets/speakers2/patricioM.jpg'
import wei3erHase from '../assets/speakers2/wei3erHase.jpg'
import skylar from '../assets/speakers2/skylar.jpg'
import santos from '../assets/speakers2/santos.jpg'
import ohad from '../assets/speakers2/ohad.jpg'
import ramiro from '../assets/speakers2/ramiro.jpg'
import andrew from '../assets/speakers2/andrew.jpg'
import luiz from '../assets/speakers2/luiz.jpg'
import sebastianL from '../assets/speakers2/sL.jpg'
import evan from '../assets/speakers2/evan.jpeg'
import whiteChocolate from '../assets/speakers2/whiteChocolate.png'
import milton from '../assets/speakers2/milton.png'
import siesta from '../assets/speakers2/siesta.png'
import siesta1 from '../assets/speakers2/siesta1.jpg'
import damianM from '../assets/speakers2/damianM.jpg'
import nicolasC from '../assets/speakers2/nicolasC.jpg'
import marianoD from '../assets/speakers2/marianoD.jpg'
import nicolasM from '../assets/speakers2/nicolasM.jpeg'
import benjamin from '../assets/speakers2/benjamin.jpg'
import brian from '../assets/speakers2/brian.jpg'
import bruno from '../assets/speakers2/bruno.jpeg'
import sweetman from '../assets/speakers2/sweetman.jpeg'

import jaffet from '../assets/speakers2/jaffet.jpg'
import { useLanguage } from '../context/LanguageContext'

const Schedule = () => {
  const { locale } = useLanguage();
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700

  const [active, setActive] = useState(0)
  const handleClick = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }

  return (
    <ScheduleSection id="agenda" locale={locale}>
      <Container>
        <Head>
          <h1>
            <FormattedHTMLMessage id="schedule.title" />
          </h1>
        </Head>
        <Content className={active === 0 ? 'active' : ''}>
          <Day>
            <Date className="one">
              <h2>
                <span className="pixel">Charlas</span>
              </h2>
            </Date>
            <Talks>
              <Entry>
                <Hours>8:00 - 9:00</Hours>
                <div>
                  <h3>Acreditación</h3>
                </div>
              </Entry>
              <Entry>
                <Hours>9:00 - 9:30</Hours>
                <div>
                  <p>Sala Amazonía</p>
                  <h3>Apertura</h3>
                  <p>Aya Miyaguchi, Ethereum Foundation</p>
                </div>
              </Entry>
              <Entry>
                <Hours>9:30 - 10:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Conociendo a Vitalik, Fundador de Ethereum</h3>
                    <p>Mariano Conti entrevista a Vitalik</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:00 - 10:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>La evolución del dinero. Desde el oro hasta ETH. </h3>
                    <p>Alfredo Roisenzvit, MoonQuant.capital.</p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>Por qué necesitamos comunicación en Web 3</h3>
                    <p>Jaf, EPNS</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:30 - 11:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Qué es Ethereum</h3>
                    <p>JJ Campuzano, CypherpunkCitadel Dao</p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>La importancia de manejar un full node</h3>
                    <p>Joxes, Researcher y Divulgador</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:00 - 11:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>dinero ultra sonido </h3>
                    <p>Justin Drake, Ethereum Foundation</p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>¡Todos vamos a tener NFTs!</h3>
                    <p>Diego Lora, Q'ORI Project</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:30 - 11:35</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Bienvenida a Bogotá</h3>
                    <p>
                      Alfredo Bateman, Secretario de Desarrollo Económico de
                      Bogotá
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:35 - 12:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Introducción a DeFi</h3>
                    <p>Romina Sejas, Defi Latam</p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>
                      La forma final de Ethereum: Proposer Builder Separation,
                      proto y full danksharding
                    </h3>
                    <p>Ariiellus + Diego , Cryptoversidad</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 12:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Monedas Estables</h3>
                    <p>
                      Tobal García, Maker Growth + Nadia Alvarez, Maker Dao +
                      Benjamín, QuiDao Protocol
                    </p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>Cómo participar en la gobernanza de una DAO</h3>
                    <p>
                      Ana HER, Dao y Bankless Dao + Jean de Kleros, board member
                      de PoH + Eric Suazo Optimism en español. Modera Nico Gallardo.
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 - 14:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Qué es una DAO</h3>
                    <p>Maria Gomez </p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>Seguridad para el usuario y estafas comunes</h3>
                    <p>Pablo Sabatella, Defy Education</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 14:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Introducción a "Zero Knowledge Proof"</h3>
                    <p>Jordi Baylina, Polygon</p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>Educación Web 3</h3>
                    <p>
                      Panel: Angela, Platzi + Solange (chainlink) + Candu
                      Fazzano, Defi Latam + Diego -Cryptoversidad. Modera Juan
                      David Reyes, Ethereum Foundation
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:30 -15:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>
                      Escalabilidad de Ethereum: una historia de
                      descentralización
                    </h3>
                    <p>Omar Espejel, Starknet</p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>Regulación en Crypto</h3>
                    <p>
                      Ana CryptoLawyer + Andres Junge, Notabene + Emilia Campos
                      , MCZ Brasil. Moderador: Erick Rincon
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 -15:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Los retos del Merge y su trascendencia</h3>
                    <p>Mario Vega, Ethereum Foundation</p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>
                      Algunos ingredientes (sin la receta) para armar un
                      proyecto Web3
                    </h3>
                    <p>Gabriel Gruber, Exactly</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:30 - 16:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Problemas Reales & Soluciones Reales en Latam</h3>
                    <p>
                      Diego Fernandez, Secretario de Innovación de la Ciudad de
                      Bs. As + Lucas Jolías, Fundador y director de OS City +
                      Iraís Reyes, Diputada Monterrey + Sergio Bravo, Co Founder
                      Defiant. Modera: Mauricio Tovar, Tropykus
                    </p>
                  </div>
                  <div>
                    <p>Sala Andina</p>
                    <h3>Qué son los "Public Goods"</h3>
                    <p>
                      Ale Borda, Fifty Years + Cristian Espinoza G. , Cryptex
                      Finance & Ethereum Honduras + Mateo Daza, Giveth.io + Manu
                      Alzuru, DoinGudHQ. Modera: Daniel Marquez
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 16:30</Hours>
                <div>
                  <div>
                    <p>Sala Amazonía</p>
                    <h3>Presentación Comunidades Latam</h3>
                  </div>
                </div>
              </Entry>
            </Talks>
          </Day>

          <Day>
            <Date>
              <h2>
                <span className="pixel">Workshops</span>
              </h2>
            </Date>
            <Talks>
              <Entry>
                <Hours>10:00 - 10:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Caribe</p>
                    <h3>Como crear tu primer smart contract</h3>
                    <p>Solange Gueiros</p>
                  </div>
                  <div>
                    <p>Sala Orinoquía</p>
                    <h3>SBrightID, descentralizando la identidad digital</h3>
                    <p>Carlos Mesa, Bright ID</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:30 - 11:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Caribe</p>
                    <h3>Introducción a Scaffold-ETH y SpeedRunEthereum</h3>
                    <p>Carlos @carletex</p>
                  </div>
                  <div>
                    <p>Sala Orinoquía</p>
                    <h3>Cómo usar L2s por menos Gas Fees</h3>
                    <p>Ahmed Castro</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:00 - 11:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Orinoquía</p>
                    <h3>Staking en Ethereum: por qué deberías y cómo</h3>
                    <p>Pol Lanski</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:30 - 12:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Caribe</p>
                    <h3>Introducción a solidity</h3>
                    <p>Oscar Barajas, Platzi</p>
                  </div>
                  <div>
                    <p>Sala Orinoquía</p>
                    <h3>Como manejar un full nodo en raspberry pi</h3>
                    <p>Diego Losada @ethereumonarm</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 12:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Caribe</p>
                    <h3>Tokeniza tu arte</h3>
                    <p>Ahh Sun</p>
                  </div>
                  <div>
                    <p>Sala Orinoquía</p>
                    <h3>Construyendo infraestructura en web3 con Livepeer</h3>
                    <p>Angela Ocando, Platzi</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 -14:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Caribe</p>
                    <h3>Como crear un NFT y publicarlo en un marketplace</h3>
                    <p>Doris Hernandez</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 14:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Caribe</p>
                    <h3>Cómo usar una billetera</h3>
                    <p>Pilar Rodriguez, Defiant</p>
                  </div>
                  <div>
                    <p>Sala Orinoquía</p>
                    <h3>Como crear un token ERC20</h3>
                    <p>Sebastián Perez, mightyblock.co</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:30 - 15:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Caribe</p>
                    <h3>Probando tus aplicaciones descentralizadas</h3>
                    <p>Natacha de la Rosa</p>
                  </div>
                  <div>
                    <p>Sala Orinoquía</p>
                    <h3>Introducción a Optimism</h3>
                    <p>
                      Joxes DefiLatam/ L2 es Esapñol / OptimismESP Axlvaz
                      DefiLatam/ 0xRosChain/ OptimismESP
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:15 -16:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Sala Caribe</p>
                    <h3>Desarrollo de Smart Contracts con Harhat</h3>
                    <p>Patricio Palladino</p>
                  </div>
                  <div>
                    <p>Sala Orinoquía</p>
                    <h3>Como crear un token ERC20</h3>
                    <p>Alejandro Santander</p>
                  </div>
                </div>
              </Entry>
            </Talks>
          </Day>
        </Content>
      </Container>
    </ScheduleSection>
  )
}

const ScheduleSection = styled.section`
  background: #0b0c0d;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 40% 0%;
  color: #4d4d4d;
  text-align: center;
  height: auto;
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 88px;
    line-height: 106px;
    text-transform: uppercase;
    color: #faf7f5;
    position: relative;
    @media only screen and (max-width: 1100px) {
      font-size: ${props => (props.locale == 'pt' ? '40px' : '44px')};
      line-height: 45px;
      margin-bottom: 73px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
`

const Talks = styled.div`
  width: calc(100% - 226px);
  background: #0b0c0d;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`
const Content = styled.div`
  display: none;
  &.active {
    display: block;
  }
`

const Hours = styled.p`
  width: 160px;
  min-width: 160px;
  @media only screen and (max-width: 1100px) {
    padding-bottom: 30px;
  }
`

const Container = styled.div`
  max-width: 1240px;
  padding: 60px 40px 160px 40px;
  @media only screen and (max-width: 1100px) {
    padding: 0 15px 80px 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 160px;
`
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    button {
      font-family: 'Pixel';
      font-weight: 400;
      font-size: 30px;
      line-height: 30px;
      padding-bottom: 15px;
      text-transform: uppercase;
      color: #8c8c8c;
      border: 0px;
      margin: 30px;
      border-bottom: 4px solid transparent;
      background: transparent;
      &.active,
      &:active {
        border-bottom: 4px solid #80ff9f;
        color: #faf7f5;
      }
    }
  }
`

const Day = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  outline: 1px solid #4d4d4d;
  max-width: 1222px;
  @media only screen and (max-width: 1100px) {
    max-width: 90%;
    flex-direction: column;
  }

  margin-right: 0;
  margin-left: auto;
  margin-bottom: 100px;
  flex-wrap: wrap;
`
const Entry = styled.div`
  padding: 24px;
  display: flex;
  @media only screen and (max-width: 1100px) {
    padding: 15px;
    flex-direction: column;
  }
  border-bottom: 1px solid #4d4d4d;
  img {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    object-fit: cover;
    margin-right: 7px;
  }
  .twoColumns {
    display: grid;
    width: calc(100% - 160px);
    grid-template-columns: 50% 50%;
    column-gap: 30px;
    @media only screen and (max-width: 1100px) {
      grid-template-columns: 100%;
      width: 100%;
      row-gap: 30px;
    }
  }
  p {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #8c8c8c;
    margin: 0;
    padding-right: 5px;
  }
  h3 {
    font-family: 'Helvetica-Bold';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #e3e3e3;
    margin-top: 0;
    margin-bottom: 10px;
    padding-right: 5px;
  }
`

const Date = styled.div`
  width: 226px;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    padding-bottom: 15px;
  }
  background: #3388ff;
  &.one {
    background: #e573e5;
  }
  &.three {
    background: #80ff9f;
  }
  color: #0b0c0d;
  h2 {
    font-family: Helvetica;
    font-size: 30px;
    line-height: 54px;
    padding: 16px;
    margin: 24px auto 0 auto;
    text-transform: uppercase;
    span.pixel {
      font-family: 'Pixel';
    }
    @media only screen and (max-width: 900px) {
      font-size: 60px;
      line-height: 45px;
      margin: 15px auto 0 auto;
    }
  }
  h3 {
    font-family: 'Helvetica-Bold';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    margin: 0;
    padding-left: 16px;
  }
`

export default Schedule
