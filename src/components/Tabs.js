import React from 'react'
import styled from 'styled-components'

import { PALETTE } from '../App'

const Tabs = ({ mode, color = PALETTE.GREEN, children }) => {
  const edition = localStorage.getItem('edition')
  return (
    <TabsBox mode={mode} color={color}>
      {children}
    </TabsBox>
  )
}

const TabsBox = styled.div`
  display: ${props => (props.mode == 'large' ? 'flex' : 'block')};
  margin: 0 auto;
  text-align: center;
  a {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #4d4d4d;
    text-align: left;
    padding: ${props => (props.mode == 'large' ? '0 13px' : '20px 0')};
    background: transparent;
    border: 0px solid;
    display: block;
    margin: auto;
    height: 38px;
    display: flex;
    align-items: center;
    &:hover,
    &:active,
    &:focus {
      border-bottom: solid 4px ${props => props.color};
    }
  }

  .dropdown-div {
    position: 'fixed';
    margin-top: 15%;
    margin-left: -14%;
  }

  .dropdown-div > a {
    color: white !important;
  }
`

export default Tabs
