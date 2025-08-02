import datas from '../../logements.json'

function Card () {
    const logements = datas.map( data  => (
        <div className='logement' key={data.id}>
            <p>{data.title}</p>
            <img src={data.cover} alt='photo du logement'/>
        </div>
    ))
    return (
        <div className="card">
            <div className='logements'>{logements}</div>
        </div>
    )
}

export default Card