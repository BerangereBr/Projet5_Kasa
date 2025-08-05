import Header from "../components/Header"
import Banner from "../components/banner";
import Collapse from "../components/Collapse";
import '../styles/about.scss'
import bannerAbout from '../assets/bannerAbout.png'

function About () {
    return (
        <div className="container">
            <div className="homePage">
                <Banner image={bannerAbout}/>
                <Collapse />
            </div>
        </div>
    )
}

export default About