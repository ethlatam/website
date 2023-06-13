import Navbar from "../sections/Navbar";
import Hero from '../sections/Hero'
import EthToLatam from '../sections/EthToLatam'
import Faqs from '../sections/Faqs'
import Venue from '../sections/Venue'
import Footer from '../sections/Footer'
import Loop from '../components/Loop'
import loopHonduras from '../assets/carousel-honduras.png'
import { PALETTE } from "../App";
import Apply from "../sections/Apply";
import date1 from "../assets/date1-honduras.svg"
import date2 from "../assets/date2-honduras.svg"
import venueSmSrc from '../assets/venue-honduras.png'

function Honduras() {
    localStorage.setItem('edition', 'honduras')
    return (
        <div className="App">
            <Navbar color={'skyblue'} />
            <Hero color={PALETTE.SKYBLUE} colorButton={PALETTE.SKYBLUE} buttonSrc={"#"} loopSrc={loopHonduras} />
            <Apply />
            <EthToLatam />
            <Loop reverse content={<img src={date1} />} />
            <Loop content={<img src={date2} />} />
            <Venue
                locationHref={"https://www.cecbuenosaires.com.ar/"}
                venueSmSrc={venueSmSrc}
                venueLgSrc={venueSmSrc}
            />
            <Faqs />
            <Footer />
        </div>
    )
}

export default Honduras;
