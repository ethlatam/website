import styled from "styled-components";
import Container from "../components/Container";
import { Button } from "../components/Button";
import { FormattedMessage } from "react-intl";


const Apply = (props) => {
    const edition = localStorage.getItem('edition')
    return (
        <ApplySection>
            <Container>
                <Content>
                    <Box>
                        <span>QUIERO SER PARTE DE ETH LATAM 2023 COMO:</span>
                    </Box>
                    <Box>
                        <Button color={"skyblue"} href={"sponsor"} target="_blank">
                            <FormattedMessage id={edition + '.hero.button'} />
                        </Button>
                        <Button color={"skyblue"} href={"Speaker"} target="_blank">
                            <FormattedMessage id={edition + '.hero.button'} />
                        </Button>
                        <Button color={"skyblue"} href={"Voluntario"} target="_blank">
                            <FormattedMessage id={edition + '.hero.button'} />
                        </Button>
                    </Box>
                </Content>
            </Container>
        </ApplySection>
    )
}

const ApplySection = styled.section`
    background-color: #fff;
`

const Content = styled.div`
    display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    // align-items: flex-start;
    // align-content: center;
    // background-color: #2f1d58;
    // overflow: auto;
    flex-direction: row;
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    width: 65%;
    background-color: #2f1d58;
    height: 80vh;
    overflow: auto;
`
export default Apply;