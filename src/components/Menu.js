import React from 'react'
import styled from 'styled-components'
import GetTickets from './GetTickets'
import Flags from './Flags'
import Tabs from './Tabs'

const Menu = ({ open, color, children }) => {
  return (
    <StyledMenu open={open}>
      <Tabs mode="small" children={children} color={color}/>
      <Flags />
      <br/>
      <GetTickets color={color} />
    </StyledMenu>
  )
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #faf7f5;
  height: 100vh;
  padding: 50px 50px 30px 50px;
  position: absolute;
  z-index: 1;
  top: 40px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  text-align: center;
`

export default Menu
