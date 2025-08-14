import Banner from "../components/banner"
import Card from '../components/Card'
import '../styles/home.scss'
import bannerHome from '../assets/bannerHome.png'


function Home() {
    return (
        <>
            <Banner image={bannerHome} text={<span className="title__banner"></span>} />
            <Card />
        </>
    )
}

export default Home 