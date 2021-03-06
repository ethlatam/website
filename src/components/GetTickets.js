import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

const GetTickets = () => {
  return (
    <>
      <GreenButton href="https://www.eventbrite.com/e/ethlatam-at-buenos-aires-tickets-374680147407" target="_blank">
        <FormattedMessage id="navbar.button" />
      </GreenButton>
    </>
  )
}

const GreenButton = styled.a`
  background: #80ff9f;
  font-family: 'Pixel';
  height: 40px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000;
`

export default GetTickets
