import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import background from '../assets/speakers-line.svg'
import elipse from '../assets/elipse.svg'
import arrow from '../assets/arrow-down.svg'

import aya from '../assets/speakersBog/Aya.jpeg'
import vitalik from '../assets/speakers2/vitalik.png'
import aya2 from '../assets/speakers2/aya.jpeg'
import pablo from '../assets/speakers2/pablo.jpg'
import diego from '../assets/speakersBog/DiegoMazo.png'
import jordi from '../assets/speakersBog/jordi.jpg'
import ocando from '../assets/speakersBog/ocando.jpg'
import nadia from '../assets/speakersBog/NadiaAlvarez.jpg'
import jj from '../assets/speakersBog/JJCampuzano.png'
import dmars from '../assets/speakersBog/Dmars.png'
import solange from '../assets/speakersBog/SolangeGueiros.jpg'
import manu from '../assets/speakersBog/ManuAlzuru.jpg'
import tobal from '../assets/speakersBog/TobalGarcia.jpeg'
import alfredo from '../assets/speakersBog/AlfredoRoi.jpeg'
import mateo from '../assets/speakersBog/MateoDaza.jpg'
import crisgarner from '../assets/speakersBog/crisgarner.jpg'
import ale from '../assets/speakersBog/AleBorda.jpg'
import cryptochica from '../assets/speakersBog/cryptochica.png'
import criptolawyer from '../assets/speakersBog/criptolawyer.jpg'
import justin from '../assets/speakersBog/justin.jpeg'
import diegoF from '../assets/speakersBog/DiegoFernandez.jpeg'
import lucas from '../assets/speakersBog/LucasJolias.jpg'
import mariano from '../assets/speakersBog/marianoconti.jpeg'
import benjamin from '../assets/speakersBog/benjamin.jpeg'
import carlos from '../assets/speakersBog/carloss.jpeg'
import ariel from '../assets/speakersBog/ariel.jpeg'
import jaffet from '../assets/speakersBog/Jaffet.png'
import andres from '../assets/speakersBog/andres.png'
import joxes from '../assets/speakersBog/joex.jpeg'
import juandavid from '../assets/speakersBog/juandavid.jpeg'
import martint from '../assets/speakersBog/martint.jpg'
import mauricio from '../assets/speakersBog/mauricio.jpeg'
import natacha from '../assets/speakersBog/natacha.jpg'
import nicolasG from '../assets/speakersBog/nicolasgallardo.jpg'
import omar from '../assets/speakersBog/omar.jpeg'
import anabelen from '../assets/speakersBog/anabelen.jpeg'
import oscar from '../assets/speakersBog/oscar.png'
import irais from '../assets/speakersBog/irais.png'
import mario from '../assets/speakersBog/mario.jpg'
import diegol from '../assets/speakersBog/diegol.png'
import ahh from '../assets/speakersBog/ahh.png'
import carlosmesa from '../assets/speakersBog/carlosmesa.jpeg'
import pol from '../assets/speakersBog/pol.jpg'
import emilia from '../assets/speakersBog/emilia.jpeg'
import gaby from '../assets/speakersBog/gaby.jpg'
import doris from '../assets/speakersBog/doris.jpeg'
import pilar from '../assets/speakersBog/pilar.jpeg'
import eric from '../assets/speakersBog/Eric.jpg'
import candela from '../assets/speakersBog/Candela.jpg'
import sebas from '../assets/speakersBog/sebasperez.jpg'
import maria from '../assets/speakersBog/maria.jpg'
import lola from '../assets/speakersBog/lola.jpg'
import pato from '../assets/speakersBog/pato.png'
import patow from '../assets/speakersBog/patow.jpeg'

import japon from '../assets/flags/jp.svg'
import argentina from '../assets/flags/ar.svg'
import alemania from '../assets/flags/de.svg'
import españa from '../assets/flags/es.svg'
import mexico from '../assets/flags/mx.svg'
import brasil from '../assets/flags/br.svg'
import bolivia from '../assets/flags/bo.svg'
import colombia from '../assets/flags/co.svg'
import suiza from '../assets/flags/ch.svg'
import honduras from '../assets/flags/hn.svg'
import peru from '../assets/flags/pe.svg'
import venezuela from '../assets/flags/ve.svg'
import uk from '../assets/flags/gb.svg'
import dominicana from '../assets/flags/do.svg'
import costarica from '../assets/flags/cr.svg'
import chile from '../assets/flags/cl.svg'


import bateman from '../assets/speakersBog/bateman.jpeg'
import carlatex from '../assets/speakersBog/carletex.jpeg'
import erick from '../assets/speakersBog/erick.jpeg'
import sebap from '../assets/speakersBog/sebasperez.jpeg'
import amehd from '../assets/speakersBog/amehd.jpeg'
import axl  from '../assets/speakersBog/Axl.jpeg'
import ericsuazo from '../assets/speakersBog/ericsuazo.jpeg'
import guille from '../assets/speakersBog/GuillermoGoncalvez.jpeg'
import danielm from '../assets/speakersBog/danielmarquez.jpeg'

const Speakers = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700
  return (
    <SpeakersSection id="speakers">
      <Container>
        <h1>
          <span className="pixel">S</span>
          pe
          <span className="pixel">
            ak
            <Elipse src={elipse} />
          </span>
          ers {width >= medium && <Arrow src={arrow} />}
        </h1>
        <BoxWrapper>
          <BoxItem className="supervip">
            <Content
              target="_blank"
              href="https://twitter.com/VitalikButerin"
              className="supervipContent"
            >
              <img src={vitalik} style={{ objectPosition: '100% 20%' }} />
              <div>
                <h1>Vitalik</h1>
                <Subtitile className="withPadding">
                  <h2>Ethereum Foundation </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/AyaMiyagotchi"
              className="vipContent"
            >
              <img src={aya2} style={{ objectPosition: '100% 20%' }} />
              <div>
                <h1>Aya Miyaguchi</h1>
                <Subtitile className="withPadding">
                  <h2>Ethereum Foundation </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/PabloSabbatella"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={pablo} />
              <div>
                <h1>Pablo Sabbatella</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>Defy Education </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/criptolawyer"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={criptolawyer} />
              <div>
                <h1>Ana CryptoLawyer</h1>
                <Subtitile>
                  <Country src={venezuela} />
                  <h2>CryptoLawyer </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/ManuAlzuru"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={manu} />
              <div>
                <h1>Manu Alzuru</h1>
                <Subtitile>
                  <Country src={venezuela} />
                  <h2>DoinGudHQ</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Dmars300"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={dmars} />
              <div>
                <h1>DMars</h1>
                <Subtitile>
                  <Country src={mexico} />
                  <h2>Cryptoversidad</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/drakefjustin"
              className="vipContent"
            >
              <img src={justin} style={{ objectPosition: '100% 20%' }} />
              <div>
                <h1>Justin Drake</h1>
                <Subtitile className="withPadding">
                  <h2>Ethereum Foundation </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/aroisenzvit"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '35% 50%' }} src={alfredo} />
              <div>
                <h1>Alfredo Roisenzvit</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>MoonQuant Capital</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/crisgarner"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={crisgarner} />
              <div>
                <h1>Crisgarner</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Cryptex Finance</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/solangegueiros"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={solange} />
              <div>
                <h1>Solange Gueiros</h1>
                <Subtitile>
                  <Country src={brasil} />
                  <h2>Ethereum Brasil y Chainlink Labs</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/nad8802?lang=es"
            >
              <img style={{ objectPosition: '100% 33%' }} src={nadia} />
              <div>
                <h1>Nadia Alvarez</h1>
                <Subtitile className="withPadding">
                  <Country src={colombia} />
                  <h2>MakerDAO</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/ocandocrypto"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={ocando} />
              <div>
                <h1>Angela Ocando</h1>
                <Subtitile>
                  <Country src={venezuela} />
                  <h2>Platzi</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Aleborda21"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={ale} />
              <div>
                <h1>Ale Borda</h1>
                <Subtitile>
                  <Country src={peru} />
                  <h2>Fifty Years</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/fernandezdiego"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={diegoF} />
              <div>
                <h1>Diego Fernandez</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>Gob de Bs. As</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/das_grasshopper"
            >
              <img style={{ objectPosition: '100% 39%' }} src={jj} />
              <div>
                <h1>JJ Campuzano</h1>
                <Subtitile className="withPadding">
                  <Country src={mexico} />
                  <h2>CypherpunkCitadel DAO</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/tobalgarcia_"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={tobal} />
              <div>
                <h1>Tobal García</h1>
                <Subtitile>
                  <Country src={venezuela} />
                  <h2>Maker Growth</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/cryptochica_arg"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={cryptochica} />
              <div>
                <h1>Cryptochica</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>DeFi Latam</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/mateodazab"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={mateo} />
              <div>
                <h1>Mateo Daza</h1>
                <Subtitile>
                  <Country src={colombia} />
                  <h2>Giveth.io</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/lucasjolias"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={lucas} />
              <div>
                <h1>Lucas Jolias</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>OS City</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/worthalter?lang=es"
              className="vipContent"
            >
              <img style={{ objectPosition: '100% 23%' }} src={patow} />
              <div>
                <h1>Patricio Wolthalter</h1>

                <Subtitile className="withPadding">
                  <Country src={argentina} />
                  <h2>Good Guy</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/LassGallard"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={nicolasG} />
              <div>
                <h1>Nicolás Gallardo</h1>
                <Subtitile>
                  <Country src={bolivia} />
                  <h2>Troop Finance</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/espejelomar"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={omar} />
              <div>
                <h1>Omar Espejel</h1>
                <Subtitile>
                  <Country src={mexico} />
                  <h2>StarkNet</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/0xjuandavid"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={juandavid} />
              <div>
                <h1>Juan David</h1>
                <Subtitile>
                  <Country src={colombia} />
                  <h2>Ethereum Foundation</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Benjamin918_"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={benjamin} />
              <div>
                <h1>Benjamin</h1>
                <Subtitile>
                  <h2>QiDao Protocol</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/gndx"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={oscar} />
              <div>
                <h1>Oscar Barajas Tavares</h1>
                <Subtitile>
                  <Country src={colombia} />
                  <h2>Platzi</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/0xJoxes"
            >
              <img style={{ objectPosition: '100% 39%' }} src={joxes} />
              <div>
                <h1>Joxes</h1>
                <Subtitile className="withPadding">
                  <Country src={venezuela} />
                  <h2>DeFi LATAM, L2 en Español, Optimism</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/natachadelarosa"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={natacha} />
              <div>
                <h1>Natacha de la Rosa</h1>
                <Subtitile>
                  <Country src={dominicana} />
                  <h2>Tally</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/_carletex_"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={carlos} />
              <div>
                <h1>Carlos S.</h1>
                <Subtitile>
                  <Country src={españa} />
                  <h2>BuidlGuidl</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/irais_reyes"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={irais} />
              <div>
                <h1>Iraís Reyes</h1>
                <Subtitile>
                  <Country src={mexico} />
                  <h2>Diputada del H. Congreso del Estado de Nuevo León</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/ariiellus"
            >
              <img style={{ objectPosition: '100% 39%' }} src={ariel} />
              <div>
                <h1>@ariiellus</h1>
                <Subtitile className="withPadding">
                  <Country src={mexico} />
                  <h2>Ethereum Mexico, Arch Finance</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/AnaTech_eth"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={anabelen} />
              <div>
                <h1>Ana Tech</h1>
                <Subtitile>
                  <Country src={mexico} />
                  <h2>Ethereum México, H.E.R. DAO LATAM, BanklessDAO</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/jafetsc"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={jaffet} />
              <div>
                <h1>Jaffet Sandi</h1>
                <Subtitile>
                  <Country src={costarica} />
                  <h2>Ethereum Push Notification Service</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/ajunge_m"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={andres} />
              <div>
                <h1>Andres Junge</h1>
                <Subtitile>
                  <Country src={chile} />
                  <h2>Notabene</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Pol_Lanski"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={pol} />
              <div>
                <h1>Pol Lanski</h1>
                <Subtitile>
                  <h2>Dappnode COO</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/elbuenmayini"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={mario} />
              <div>
                <h1>Mario Vega</h1>
                <Subtitile>
                  <Country src={mexico} />
                  <h2>Ethereum Foundation - Test Developer</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/maurotov"
            >
              <img style={{ objectPosition: '100% 39%' }} src={mauricio} />
              <div>
                <h1>Mauricio Tovar</h1>
                <Subtitile className="withPadding">
                  <Country src={colombia} />
                  <h2>Tropykus Finance</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/MonoMesa"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={carlosmesa} />
              <div>
                <h1>Carlos Mesa</h1>
                <Subtitile>
                  <Country src={colombia} />
                  <h2>BrightID</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Sunqu22"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={diegol} />
              <div>
                <h1>Diego Lora</h1>
                <Subtitile>
                  <Country src={peru} />
                  <h2>Q'ORI Project</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://www.linkedin.com/in/ecamposadvocacia/"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={emilia} />
              <div>
                <h1>Emilia Campos</h1>
                <Subtitile>
                  <Country src={brasil} />
                  <h2>MCZ</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/ahhsun_"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={ahh} />
              <div>
                <h1>Ahh Sun</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>zapper Español, blockeadas, her dao latam</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/GabrielGruber"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={gaby} />
              <div>
                <h1>Gabriel Gruber</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>Exactly</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/doris_hernz"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={doris} />
              <div>
                <h1>Doris Hernandez</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Dippi</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/rrodriguezpilar"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={pilar} />
              <div>
                <h1>Pilar Rodríguez</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>Defiant Wallet</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/ErikSuazo2"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={eric} />
              <div>
                <h1>Erik Suazo</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Hoplite Zapper y Miembro de Optimism Español</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/cryptocandu"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '66% 50%' }} src={candela} />
              <div>
                <h1>Candela Fazzano</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>CM DeFi Latam Co-leading Mujeres en Crypto</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={sebas} />
              <div>
                <h1>Sebas Pérez</h1>
                <Subtitile>
                  <h2>mightyblock.co</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={lola} />
              <div>
                <h1>Lola Rodríguez</h1>
                <Subtitile />
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={pato} />
              <div>
                <h1>Patricio Palladino</h1>
                <Subtitile />
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={maria} />
              <div>
                <h1>María Gómez</h1>
                <Subtitile>
                  <h2>interchain.io</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/jbaylina"
            >
              <img style={{ objectPosition: '100% 38%' }} src={jordi} />
              <div>
                <h1>Jordi Baylina</h1>
                <Subtitile className="withPadding">
                  <Country src={suiza} />
                  <h2>Polygon Technologies</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/alfredobateman?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={bateman} />
              <div>
                <h1>Alfredo Bateman</h1>
                <Subtitile />
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://ethlatam.org" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={danielm} />
              <div>
                <h1>Daniel Marquez</h1>
                <Subtitile>
                  <Country src={colombia} />
                  <h2>Koyomaki</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://ethlatam.org" className="importantPersonContent">
              <img style={{ objectPosition: '30% 50%' }} src={guille} />
              <div>
                <h1>Guillermo Goncalvez</h1>
                <Subtitile/>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://ethlatam.org" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={ericsuazo} />
              <div>
                <h1>Eric Suazo</h1>
                <Subtitile/>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://ethlatam.org" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={axl} />
              <div>
                <h1>Axl</h1>
                <Subtitile/>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://ethlatam.org" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={amehd} />
              <div>
                <h1>Ahmed Castro</h1>
                <Subtitile/>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://ethlatam.org" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={sebap} />
              <div>
                <h1>Sebastián Perez</h1>
                <Subtitile/>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://ethlatam.org" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={erick} />
              <div>
                <h1>Erick Rincón Cárdenas</h1>
                <Subtitile/>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://ethlatam.org" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={carlatex} />
              <div>
                <h1>Carletex</h1>
                <Subtitile/>
              </div>
            </Content>
          </BoxItem>
        </BoxWrapper>
      </Container>
    </SpeakersSection>
  )
}





const SpeakersSection = styled.section`
  background: #0b0c0d;
  color: white;
  text-align: top;
  height: auto;
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 88px;
    line-height: 106px;
    text-transform: uppercase;
    color: #faf7f5;
    position: relative;
    @media only screen and (min-width: 701px) and (max-width: 1135px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 44px;
      line-height: 45px;
      margin-bottom: 73px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
    position: relative;
  }
`

const Elipse = styled.img`
  position: absolute;
  @media only screen and (min-width: 701px) and (max-width: 1135px) {
    bottom: -15px;
    right: -111px;
    width: 280px;
  }
  @media only screen and (max-width: 700px) {
    bottom: -12px;
    right: -97px;
    width: 246px;
  }
  bottom: -22px;
  right: -183px;
`

const BoxWrapper = styled.div`
  column-gap: 0px;
  outline: 1px solid #4d4d4d;
  margin-right: 0;
  margin-left: auto;
  column-count: 3;
  max-width: 780px;
  @media only screen and (max-width: 1100px) {
    max-width: 540px;
    column-count: 2;
  }
  h1 {
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #faf7f5;
    margin: 0;
    @media only screen and (max-width: 1135px) {
      font-size: 12px;
    }
  }
  h2 {
    font-size: 12px;
    line-height: 14px;
    color: #737373;
    margin: 0;
    @media only screen and (max-width: 1135px) {
      font-size: 9px;
    }
  }
`
const Subtitile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &.withPadding {
    padding-left: 16px;
    h2 {
      padding-left: 0px !important;
    }
  }
  h2 {
    padding-top: 2px;
  }
`

const BoxItem = styled.div`
  background: #0b0c0d;
  width: 100%;
  display: inline-block;
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: 'Helvetica';
  font-weight: 400;
  outline: 1px solid #4d4d4d;
  &.supervip {
    height: 228px;
  }
  &.vip {
    height: 152px;
  }
  &.importantPerson {
    height: 76px;
  }
`
const Content = styled.a`
  overflow: hidden;
  text-decoration: none;
  @media only screen and (min-width: 701px) {
    width: 100%;
  }
  div {
    max-width: 100%;
  }
  img {
    height: 44px;
    padding: 16px;
    object-fit: cover;
    @media only screen and (max-width: 1135px) {
      padding: 13px;
    }
    @media only screen and (max-width: 540px) {
      padding: 13px;
    }
  }
  &.importantPersonContent {
    display: flex;
    align-items: center;
    img {
      height: 44px;
      width: 44px;
      object-fit: cover;
      object-position: center;
      padding: 14px 16px;
      @media only screen and (max-width: 540px) {
        padding: 11px 13px;
      }
    }
  }
  &.supervipContent {
    display: inline-block;
    h1 {
      padding-left: 16px;
    }
    @media only screen and (max-width: 540px) {
      width: 100%;
    }
    img {
      height: 147px;
      width: 228px;
      @media only screen and (max-width: 540px) {
        object-fit: cover;
        width: calc(100% - 26px);
        object-position: 50% 20%;
      }
    }
  }
  &.vipContent {
    display: inline-block;
    h1,
    h2 {
      padding-left: 16px;
    }
    @media only screen and (max-width: 540px) {
      width: 100%;
    }
    img {
      height: 71px;
      width: 228px;
      object-fit: cover;
      object-position: center;
      @media only screen and (max-width: 540px) {
        width: calc(100% - 26px);
        object-fit: cover;
      }
    }
  }
`

const Arrow = styled.img`
  padding-left: 100px;
  padding-bottom: 11px;
`

const Country = styled.img`
  height: 15px !important;
  display: inline;
  width: 24px !important;
  margin: 0 7px 0 0 !important;
  padding: 0 !important;
  border-radius: 2px;
`

const Container = styled.div`
  max-width: 1440px;
  padding: 160px 40px 320px 40px;
  @media only screen and (max-width: 1100px) {
    padding: 80px 15px 150px 15px;
  }
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 92% 100%;
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
`

export default Speakers
