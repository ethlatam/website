import Navbar from "../sections/Navbar";
import Hero from '../sections/Hero'
import EthToLatam from '../sections/EthToLatam'
import Speakers from '../sections/Speakers'
import Sponsors from '../sections/Sponsors'
import Schedule from '../sections/Schedule'
import MediaPartners from '../sections/MediaPartners'
import Faqs from '../sections/Faqs'
import TheOtherSide from '../sections/TheOtherSide'
import Venue from '../sections/Venue'
import Footer from '../sections/Footer'
import date1 from '../assets/date1.svg'
import date2 from '../assets/date2.svg'
import Loop from "../components/Loop";
import loopArg from '../assets/carousel-ba.png'
import { PALETTE } from "../App";
import venueSmSrc from '../assets/venue-small.png'
import venueLgSrc from '../assets/venue-large.png'
import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";
import EDITIONS from "../editions";

function BuenosAires() {
    return (
        <div className="App">
            <Navbar color={PALETTE.GREEN} >
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                    <FormattedMessage id="navbar.about" />
                </Link>
                <Link
                    to={'speakers'}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <FormattedMessage id="navbar.speakers" />
                </Link>
                <Link
                    to="sponsors"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <FormattedMessage id="navbar.sponsors" />
                </Link>
                <Link to="venue" spy={true} smooth={true} offset={50} duration={500}>
                    <FormattedMessage id="navbar.venue" />
                </Link>
                <Link
                    to={'agenda'}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <FormattedMessage id="navbar.schedule" />
                </Link>
                <Link
                    to="theOtherSide"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Side events
                </Link>
                <Link to="faqs" spy={true} smooth={true} offset={50} duration={500}>
                    <FormattedMessage id="navbar.faqs" />
                </Link>
            </Navbar>
            <Hero
                color={PALETTE.GREEN}
                colorButton={PALETTE.GRAY}
                buttonSrc={"https://www.youtube.com/channel/UCYZOSfxEQ4hmocHqjZAy_dw/playlists"}
                loopSrc={loopArg}
                edition={EDITIONS.BUENOSAIRES} />
            <EthToLatam />
            <Loop reverse content={<img src={date1} alt="smothing Buenos Aires" />} />
            <Loop content={<img src={date2} alt="smothing Buenos Aires" />} />
            <Speakers />
            <Sponsors />
            <MediaPartners />
            <Venue
                locationHref={"https://www.cecbuenosaires.com.ar/"}
                venueSmSrc={venueSmSrc}
                venueLgSrc={venueLgSrc}
                edition={EDITIONS.BUENOSAIRES}
            />
            <Schedule />
            <TheOtherSide />
            <Faqs />
            <Footer />
        </div>
    )
}

export default BuenosAires;