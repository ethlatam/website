import Navbar from "../sections/Navbar";
import Hero from '../sections/Hero'
import EthToLatam from '../sections/EthToLatam'
import SpeakersBog from '../sections/SpeakersBog'
import SponsorsBog from '../sections/SponsorsBog'
import Faqs from '../sections/Faqs'
import Venue from '../sections/Venue'
import Agenda from '../sections/Agenda'
import Footer from '../sections/Footer'

import date1bog from '../assets/date1-bogota.svg'
import date2bog from '../assets/date2-bogota.svg'
import Loop from "../components/Loop";
import loopCol from '../assets/carousel-bog.png'
import { PALETTE } from "../App";
import venueSmSrc from '../assets/venue-small-bogota.png'
import venueLgSrc from '../assets/venue-large-bogota.png'


function Bogota() {
    localStorage.setItem('edition', 'bogota')

    return (
        <div className="App">
            <Navbar color={'green'} />
            <Hero color={PALETTE.GREEN} colorButton={PALETTE.GRAY} buttonSrc={"https://www.youtube.com/watch?v=gvYaRfQgBKg&list=PLXLZg2ObgxWG0aHsrXBTYJu21Fb0wfoWi"} loopSrc={loopCol} />
            <EthToLatam />
            <Loop reverse content={<img src={date1bog} />} />
            <Loop content={<img src={date2bog} />} />
            <SpeakersBog />
            <SponsorsBog />
            <Agenda />
            <Venue
                locationHref={"https://agora-bogota.com/"}
                venueSmSrc={venueSmSrc}
                venueLgSrc={venueLgSrc}
            />
            <Faqs />
            <Footer />
        </div>
    )
}

export default Bogota;
