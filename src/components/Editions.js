import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { PALETTE } from '../App';
import { ROUTES } from '../routes';

const Editions = ({ color = PALETTE.GREEN }) => {

  return (
    <SelectSection color={color}>
      <div className="dropdown">
        <button className="dropbtn">Editions</button>
        <div className="dropdown-content">
          {ROUTES.map(route => <Link to={route.path} key={route.id}>{route.description}</Link>)}
        </div>
      </div>
    </SelectSection>
  )
}

const GreenButton = styled.div`
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

const SelectSection = styled.div`
  .dropbtn {
    background: #80ff9f;
    font-family: 'Pixel';
    height: 40px;
    width: 120px;
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
    border: none;
    cursor: pointer;
    background-color: ${props => props.color};
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
     right: 0;
  }

  .dropdown-content a {
    padding: 12px 16px;
    display: block;
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #4d4d4d;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    opacity: 0.8
  }
`

export default Editions