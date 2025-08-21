import datas from '../../logements.json'
import { Link } from 'react-router-dom'

function Card () {
    
    const logements = datas.map( data  => (
        <Link to={`/logement/${data.id}`} className='logement' key={data.id}>
            <h1>{data.title}</h1>
            <img src={data.cover} alt='photo du logement'/>
        </Link>  
    ))

    return (
        <div className="card">
            <div className='logements'>{logements}</div>
        </div>
    )
}

export default Card