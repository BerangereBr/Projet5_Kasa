import Banner from "../components/banner";
import ContainerCollapse from "../components/ContainerCollapse";
import '../styles/about.scss'
import bannerAbout from '../assets/bannerAbout.png'


function About() {
    return (
        <>
            <Banner image={bannerAbout} />
            <ContainerCollapse />
        </>
    )
}

export default About