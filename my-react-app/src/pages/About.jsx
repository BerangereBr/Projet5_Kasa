import Banner from "../components/banner";
import ContainerCollapse from "../components/ContainerCollapse";
import '../styles/about.scss'
import bannerAbout from '../assets/bannerAbout.png'


function About () {
    return (
        <div className="container">
            <div className="homePage">
                <Banner image={bannerAbout}/>
                <ContainerCollapse />
            </div>
        </div>
    )
}

export default About