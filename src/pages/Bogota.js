import Navbar from "../sections/Navbar";
import Hero from '../sections/Hero'
import EthToLatam from '../sections/EthToLatam'
import SpeakersBog from '../sections/SpeakersBog'
import SponsorsBog from '../sections/SponsorsBog'
import Faqs from '../sections/Faqs'
import TheOtherSide from '../sections/TheOtherSide'
import Venue from '../sections/Venue'
import Agenda from '../sections/Agenda'
import Footer from '../sections/Footer'

function Index () {
  localStorage.setItem('edition', 'bogota')
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <EthToLatam />
            <SpeakersBog />
            <SponsorsBog />
            <Agenda />
            <Venue/>
            <Faqs/>
            <Footer />
        </div>
    )
}

export default Index;
