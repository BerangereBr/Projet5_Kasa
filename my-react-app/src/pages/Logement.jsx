import Slideshow from "../components/Slideshow"
import datas from '../../logements.json'
// import bannerAbout from '../assets/bannerAbout.png'
import '../styles/logement.scss'
import { useState } from "react"
import { useParams } from "react-router-dom"

function Logement () {
    const [image, setImage] = useState([])
    const {id} = useParams()
    console.log(id);
    
    return (
        <div>
            <Slideshow picture={image}/>    
        </div>
    )
}

export default Logement