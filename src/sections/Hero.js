import React from 'react'
import { FormattedMessage } from 'react-intl'
import background from '../assets/hero-line.svg'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Loop from '../components/Loop'
import { Button } from '../components/Button'
import Container from '../components/Container'

const Hero = ({ buttonSrc, loopSrc, color }) => {
  const edition = localStorage.getItem('edition')
  console.log("Edition Hero:", edition);
  return (
    <HeroSection>
      <Container>
        <Box>
          <p>
            <FormattedMessage id={edition + '.hero.month'} />
            <br />
            <FormattedMessage id={edition + '.hero.date'} />
            <br />
            <FormattedMessage id={edition + '.hero.year'} />
          </p>
          <img alt="img" src={logo} />
          <p className={color ?? 'green'}>
            <FormattedMessage id={edition + '.hero.city'} />
            <br />
            <FormattedMessage id={edition + '.hero.country'} />
          </p>
        </Box>
        <ButtonHero color={color} href={buttonSrc} target="_blank">
          <FormattedMessage id={edition + '.hero.button'} />
        </ButtonHero>
      </Container>
      <Loop reverse={true} content={<img alt="img" src={loopSrc} />} />
    </HeroSection>
  )
}

const HeroSection = styled.section`
  background: #0b0c0d;
  color: white;
  text-align: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 50px;
  height: auto;
  p {
    font-family: 'Pixel';
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    text-transform: uppercase;
    color: #b3b3b3;
    &.green {
      color: #80ff9f;
    }
    &.skyblue {
      color: #00BDE5;
    }
  }
  .streaming-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const Country = styled.img`
  height: 15px !important;
  display: inline;
  width: 24px !important;
  margin: 0 0 0 10px !important;
  padding: 0 !important;
  border-radius: 2px;
`


const Box = styled.div`
  padding-top: 160px;
  padding-bottom: 115px;
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    padding-top: 70px;
    flex-direction: column;
    img {
      max-width: 90%;
      padding: 60px 0;
    }
  }
`

const ButtonHero = styled(Button)`
  width: 395px;
  height: 61px;
  @media only screen and (max-width: 870px) {
    display: block;
    width: 254px;
    height: 102px;
    margin: 72px auto 50px auto;
  }
  @media only screen and (max-width: 700px) {
    &.spanish {
      padding: 0;
      border: 0;
      box-shadow: 0 0 0 0 transparent;
    }
  }
`

export default Hero
