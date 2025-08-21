import Banner from "../components/banner";
import '../styles/about.scss'
import bannerAbout from '../assets/bannerAbout.png'
import datas from '../../about.json'
import Collapse from "../components/Collapse"


function About() {
    return (
        <>
            <Banner image={bannerAbout} />
            <div className="containerCollapse">
                {datas.map((data, index) => (
                    <Collapse key={`${data.titre}-${index}`} titre={data.titre} paragraphe={data.paragraphe} />))}
            </div>
        </>
    )
}

export default About