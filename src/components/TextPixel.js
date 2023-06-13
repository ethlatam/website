import styled from "styled-components";


export const TextPixel = styled.span`
  color: ${props => props.color};
  text-align: ${props => props.align};
  font-family: 'Pixel';
  font-weight: 400;
  font-size: 32px;
  line-height: 32px;
  text-transform: uppercase;
`