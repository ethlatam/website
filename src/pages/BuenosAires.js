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

function BuenosAires() {
    localStorage.setItem('edition', 'buenos-aires')
    return (
        <div className="App">
            <Navbar color={'green'} />
            <Hero color={PALETTE.GREEN} colorButton={PALETTE.GRAY} buttonSrc={"https://www.youtube.com/channel/UCYZOSfxEQ4hmocHqjZAy_dw/playlists"} loopSrc={loopArg} />
            <EthToLatam />
            <Loop reverse content={<img src={date1} />} />
            <Loop content={<img src={date2} />} />
            <Speakers />
            <Sponsors />
            <MediaPartners />
            <Venue />
            <Schedule />
            <TheOtherSide />
            <Faqs />
            <Footer />
        </div>
    )
}

export default BuenosAires;