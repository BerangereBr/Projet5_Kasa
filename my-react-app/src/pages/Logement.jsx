import Slideshow from "../components/Slideshow"
import datas from '../../logements.json'
import '../styles/logement.scss'
import { useParams } from "react-router-dom"
import Collapse from "../components/Collapse"


function Logement() {

    const { id } = useParams()
    const logement = datas.find(data => data.id === id)
    const picture = logement.pictures

    return (
        <div>
            <Slideshow picture={picture} />
            <Collapse titre={"Description"} paragraphe={logement.description} />
            <Collapse titre={"Equipements"} paragraphe={logement.equipments} />
        </div>
    )
}

export default Logement