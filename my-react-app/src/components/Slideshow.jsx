// import datas from '../../logements.json'
import vector from '../assets/carrouselVector.png'
import { useState } from 'react';

function Slideshow({ pictures }) {
    const [index, setIndex] = useState(1)

    const goPrevPicture = () => {
        if (index == 1) {
            setIndex(pictures.length - 1)
        }else {
            setIndex(index - 1);
        }
    }

    const goNextPicture = () => {
        if (index == pictures.length - 1) {
            setIndex(1)
        } else {
            setIndex(index + 1)
        }
    }
    let totalPictures = pictures.length

    return (
        <div className='carrousel'>
            {totalPictures > 1 ? <button className='carrousel__leftVector' onClick={goPrevPicture}><img src={vector} alt='flèche'></img></button> : null}
            <img className='carrousel__image' src={pictures[index]} alt='photo du logement'></img>
            {totalPictures > 1 ? <button className='carrousel__rightVector' onClick={goNextPicture}><img  src={vector} alt='flèche'></img></button> : null}
            {totalPictures > 1 ? <p className='carrousel__number'>{`${index}/${totalPictures - 1}`}</p> : null}
        </div>
    )
}

export default Slideshow