import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'

import ape from '../assets/sponsorsHN/ape.png'
import chain from '../assets/sponsorsHN/chain.jpeg'
import eth from '../assets/sponsorsHN/opt.svg'
import etherscan from '../assets/sponsorsHN/OPESP.svg'
import icp from '../assets/sponsorsHN/layer.png'
import metalogo from '../assets/sponsorsHN/metalogo.svg'
import scroll from '../assets/sponsorsHN/scroll.png'

import { useLanguage } from '../context/LanguageContext'

const SponsorsHN = () => {
  const { locale } = useLanguage()
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700

  return (
    <SponsorsHNSection id="media" locale={locale}>
      <Container>
        <h1>
          <FormattedHTMLMessage id="sponsors.title" />
        </h1>
        <Row>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={ape} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={chain} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={eth} height="100" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={icp} width="250" />
            </BoxInfo>
          </BoxItem>

          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={etherscan} height="70" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={scroll} height="90" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={metalogo} width="150" />
            </BoxInfo>
          </BoxItem>
        </Row>
      </Container>
    </SponsorsHNSection>
  )
}

const SponsorsHNSection = styled.section`
  background: #0b0c0d;
  color: #4D4D4D;
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
    @media only screen and (max-width: 700px) {
      font-size: ${props => (props.locale == 'pt' ? '40px' : '44px')};
      line-height: 45px;
      margin-bottom: 73px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  outline: 1px solid #4D4D4D;
  max-width: 1134px;
  @media only screen and (max-width: 700px) {
    max-width: 360px;
    width: 360px;
  }
  @media only screen and (min-width: 701px) and (max-width: 1230px) {
    max-width: 600px;
    width: 600px;
  }
  margin-right: 0;
  margin-left: auto;
  margin-bottom: 1px;
  flex-wrap: wrap;
`

const BoxInfo = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const BoxItem = styled.div`
  background: #0b0c0d;
  width: 100%;
  display: inline-block;
  margin: 0;
  text-align: center;
  outline: 1px solid #4D4D4D;
  img {
    overflow: hidden;
    max-width: 70%;
  }
  &.tierTwo {
    height: 180px;
    width: 283.5px;
    @media only screen and (max-width: 700px) {
      width: 180px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 300px;
    }

    .div {
      height: 106px;
      width: 279px;
    }
  }
  &.tierOne {
    height: 250px;
    width: 378px;
    @media only screen and (max-width: 700px) {
      width: 360px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 600px;
    }
    .div {
      height: 290px;
      width: 560px;
    }
  }
`

const Container = styled.div`
  max-width: 1440px;
  padding: 0 40px 160px 40px;
  @media only screen and (max-width: 700px) {
    padding: 0 15px 80px 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 160px;
`

export default SponsorsHN
