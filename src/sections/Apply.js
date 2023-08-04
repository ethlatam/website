import styled from "styled-components";
import Container from "../components/Container";
import { Button } from "../components/Button";
import { FormattedMessage } from "react-intl";
import { PALETTE } from "../App";


const Apply = () => {
    const edition = localStorage.getItem('edition')
    return (
        <ApplySection>
            <ApplyContainer>
                <Box>
                    <FormattedMessage id="honduras.apply.text" />
                </Box>
                <Box>
                    <ApplyButton color={PALETTE.GREEN} href={"honduras.apply.sponsor.href"} target="_blank">
                        <FormattedMessage id="honduras.apply.sponsor" />
                    </ApplyButton>
                    <ApplyButton color={PALETTE.PINK} href={"honduras.apply.speaker.href"} target="_blank">
                        <FormattedMessage id="honduras.apply.speaker" />
                    </ApplyButton>
                    <ApplyButton color={PALETTE.SKYBLUE} href={"honduras.apply.volunteer.href"} target="_blank">
                        <FormattedMessage id="honduras.apply.volunteer" />
                    </ApplyButton>
                </Box>
            </ApplyContainer>
        </ApplySection>
    )
}

const ApplySection = styled.section`
    max-width: 1440px;
    color: #fff;
    margin: auto;
`
const ApplyContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 50px;
    @media only screen and (max-width: 915px) {
        flex-direction: column;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    flex-wrap: wrap;
    font-size: 24px;
    @media only screen and (max-width: 915px) {
        padding: 15px;
        flex-wrap: wrap;
    }
`

const ApplyButton = styled(Button)`
    padding: 10px 15px;
    margin: 15px;
    font-size: 16px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
    }
`

export default Apply;