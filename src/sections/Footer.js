import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'
import instagram from '../assets/instagram.svg'
import discord from '../assets/discord.svg'

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700
  return (
    <FooterSection>
      <Container>
        <div>
          <a href="https://twitter.com/ethlatam" target="_blank"><img alt="img" src={twitter} /></a>
          <a href="https://t.me/ETHLatam" target="_blank"><img alt="img" src={telegram} /></a>
          <a href="https://www.instagram.com/ethlatam" target="_blank"><img alt="img" src={instagram} /></a>
          <a href="https://discord.gg/8swP4HjEbr" target="_blank"><img alt="img" src={discord} /></a>
        </div>
        <h1>ETHLatam 2022 ©</h1>
      </Container>
    </FooterSection>
  )
}

const FooterSection = styled.section`
  background: #0b0c0d;
  margin: auto;
  width: 100%;
  position: relative;
  text-align: center;
`

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  gap: 16px;
  height: 72px;

  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 700px) {
    padding: 10px 15px;
  }
  div {
    margin-left: -10px;
  }
  img {
    padding: 0 10px;
  }
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #737373;
  }
`

export default Footer