import { useState } from 'react'
import vectorImage from '../assets/vector.png'
import '../styles/main.scss'

function Collapse({ titre, paragraphe }) {
    const [open, setOpen] = useState(false)
    const [vector, setVector] = useState(false)

    function toggle() {
        if (open === true) {
            setOpen(false)
            setVector(true)
        } else {
            setOpen(true)
            setVector(true)
        };
    }

    return (

        <div className='collapse'>
            <div className="collapse__title">
                <h1>{titre}</h1>
                <button onClick={() => { toggle() }}>
                    <img src={vectorImage} alt='veteur' className={ open ? vector ? 'openVector' : '' : vector ? 'closeVector' : 'vector'}/>
                </button>
            </div>
            <div className={`collapse__paragraphe ${open ? 'open' : 'close'}`}>
               <div className={ titre === 'Equipements' ? 'paragraphe__equipement' : 'paragraphe'}>{paragraphe}</div> 
            </div>
        </div>
    )
}

export default Collapse