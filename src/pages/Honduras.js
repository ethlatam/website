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

function Honduras() {
    localStorage.setItem('edition', 'honduras')
    return (
        <div className="App">
            <Navbar color={'skyblue'} />
            <Hero color={"skyblue"} buttonSrc={"#"} loopSrc={loopHonduras} />
            <EthToLatam />
            <Venue />
            <Faqs />
            <Footer />
        </div>
    )
}

export default Honduras;
