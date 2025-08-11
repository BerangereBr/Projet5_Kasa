import Slideshow from "../components/Slideshow"
import datas from '../../logements.json'
import '../styles/logement.scss'
import { useParams, useNavigate } from "react-router-dom"
import Collapse from "../components/Collapse"
import star from '../assets/star.png'
import starActive from '../assets/starActive.png'
import { useEffect } from "react"

function Logement() {
    const navigate = useNavigate()
    const { id } = useParams()
    const logement = datas.find(data => data.id === id)
    
    useEffect (() =>  {
    if (!logement) {
        navigate('/404', {replace : true})
    }}, [navigate, logement])

    if (!logement) {
        return ''
    }
    const picture = logement.pictures
    const tag = logement.tags
    const person = logement.host
    const rating = logement.rating


    return (
        
        <div className="container__logement">
            <Slideshow picture={picture} />
            <div className="logement__info">
                <div>
                    <h1 className="logement__info__title">{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className="logement__info__starPerson">
                    <div className="logement__info__person">
                        <h2>{person.name}</h2>
                        <img src={person.picture} />
                    </div>
                    <div className="logement__star">
                        <img src={rating >= 1 ? starActive : star}/>
                        <img src={rating >= 2 ? starActive : star}/>
                        <img src={rating >= 3 ? starActive : star}/>
                        <img src={rating >= 4 ? starActive : star}/>
                        <img src={rating >= 5 ? starActive : star}/>
                    </div>
                </div>
            </div>
            <div className="logement__list">
                <ul className="logement__list__tag">{tag.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
            </div>
            <div className="collapse__logement">
                <Collapse titre={"Description"} paragraphe={logement.description} />
                <Collapse titre={"Equipements"} paragraphe={logement.equipments} />
            </div>
        </div>
    )
}

export default Logement