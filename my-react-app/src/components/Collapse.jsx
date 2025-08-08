import { useState } from 'react'
import openVecteur from '../assets/openVecteur.png'
import closeVecteur from '../assets/closeVecteur.png'
import '../styles/main.scss'

function Collapse({ titre, paragraphe }) {
    const [open, setOpen] = useState(false)

    function toggle() {
        if (open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        };
    }

    return (

        <div className='collapse'>
            <div className="collapse__title">
                <h1>{titre}</h1>
                <button onClick={() => { toggle() }}>
                    <img src={open ? openVecteur : closeVecteur} alt='veteur' className={open ? 'openVecteur' : 'closeVecteur'}/>
                </button>
            </div>
            <div className={`collapse__paragraphe ${open ? 'open' : 'close'}`}>
               <p className='paragraphe'>{paragraphe}</p>
            </div>
        </div>
    )
}

export default Collapse