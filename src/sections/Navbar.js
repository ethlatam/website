import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import Menu from '../components/Menu'
import Tabs from '../components/Tabs'
import Flags from '../components/Flags'
import GetTickets from '../components/GetTickets'
import logo from '../assets/navbar-logo.svg'

const Navbar = ({color, children}) => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const [isOpen, setOpen] = useState(false)
  const medium = 1200

  return (
    <NavbarSection>
      <Container>
        <img alt="img" src={logo} />
        {width >= medium ? (
          <>
            <Tabs mode="large" color={color} children={children}/>
            <div className="right">
              <Flags color={color} />
              <GetTickets color={color} />
            </div>
          </>
        ) : (
          <MenuBox>
            <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
            <Menu open={isOpen} children={children} color={color}/>
          </MenuBox>
        )}
      </Container>
    </NavbarSection>
  )
}

const NavbarSection = styled.section`
  background: #faf7f5;
  margin: auto;
  width: 100%;
  position: relative;
  text-align: center;
`

const MenuBox = styled.div`
  z-index: 3;
  position: relative;
`
const Container = styled.div`
  max-width: 1440px;
  padding: 0 0 0 40px;
  @media only screen and (max-width: 700px) {
    padding: 0 0 0 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
    display: flex;
    align-items: center;
  }
`

export default Navbar
