import React from 'react'
import { FormattedMessage } from 'react-intl'
import background from '../assets/hero-line.svg'
import styled from 'styled-components'
import Loop from '../components/Loop'
//import image from '../assets/carousel.png'
import logo from '../assets/logo.svg'
import loopArg from '../assets/carousel-ba.png'
import loopCol from '../assets/carousel-bog.png'

import colombia from '../assets/flags/co.svg'

const Hero = ({ heroImg }) => {
  const edition = localStorage.getItem('edition')
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
          <p className="green">
            <FormattedMessage id={edition + '.hero.city'} />
            <br />
            <FormattedMessage id={edition + '.hero.country'} />
          </p>
        </Box>
        {edition === 'buenos-aires' ? (
          <Button
            href="https://www.youtube.com/channel/UCYZOSfxEQ4hmocHqjZAy_dw/playlists"
            target="_blank"
          >
            <FormattedMessage id={edition + '.hero.button'} />
          </Button>
        ) : (
          <Button
            href="https://www.youtube.com/watch?v=gvYaRfQgBKg&list=PLXLZg2ObgxWG0aHsrXBTYJu21Fb0wfoWi"
            target="_blank"
          >
            <FormattedMessage id={edition + '.hero.button'} />
          </Button>
        )}
      </Container>
      <Loop
        reverse={true}
        content={
          <img alt="img" src={edition === 'bogota' ? loopCol : loopArg} />
        }
      />
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

const Container = styled.div`
  max-width: 1440px;
  padding: 0 40px;
  @media only screen and (max-width: 700px) {
    padding: 0 15px 160px 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: center;
  padding-bottom: 160px;
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

const Button = styled.a`
  background: transparent;
  font-family: 'Pixel';
  margin: 72px auto 100px auto;
  text-decoration: none;
  padding: 18px 36px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: #faf7f5;
  border: 3px solid #faf7f5;
  box-sizing: border-box;
  box-shadow: -6px 6px 0px 1px #faf7f5;
  display: block;
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
