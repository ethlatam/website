import styled from "styled-components"

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

export default Container