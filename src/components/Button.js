import styled from "styled-components";

export const Button = styled.a`
  background: transparent;
  font-family: 'Pixel';
  margin: 72px auto 100px auto;
  text-decoration: none;
  padding: 18px 36px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${props => props.color};
  border: 3px solid ${props => props.color};
  box-shadow: -6px 6px 0px 1px ${props => props.color};
  box-sizing: border-box;
  display: block;
  // @media only screen and (max-width: 870px) {
  //   display: block;
  //   width: 254px;
  //   height: 102px;
  //   margin: 72px auto 50px auto;
  // }
  // @media only screen and (max-width: 700px) {
  //   &.spanish {
  //     padding: 0;
  //     border: 0;
  //     box-shadow: 0 0 0 0 transparent;
  //   }
  // }
`
