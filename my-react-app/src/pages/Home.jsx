import Banner from "../components/banner"
import Card from '../components/Card'
import '../styles/home.scss'
import bannerHome from '../assets/bannerHome.png'

function Home() {
    return (
        <>
            <Banner image={bannerHome} text={"Chez vous, partout et ailleurs"} />
            <Card />
        </>
    )
}

export default Home 