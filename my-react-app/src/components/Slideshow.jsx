// import datas from '../../logements.json'
import vector from '../assets/carrouselVector.png'

function Slideshow({ picture }) {
    let index = 0
    let prevPicture = index - 1;
    if (index == 0) {
        prevPicture = index - 1
    }
    let nextPicture = index + 1
    if (index == index.lenght) {
        nextPicture = 0
    }
    let totalPictures = picture.lenght

    return (
        <div className='carrousel'>
            {totalPictures > 1 ? <button className='carrousel__leftVector' onClick={prevPicture}><img src={vector} alt='flèche'></img></button> : null}
            <img className='carrousel__image' src={picture} alt='photo du logement'></img>
            {totalPictures > 1 ? <button className='carrousel__rightVector' onClick={nextPicture}><img  src={vector} alt='flèche'></img></button> : null}
            {totalPictures > 1 ? <div>{`${picture}/${totalPictures}`}</div> : null}
        </div>
    )
}

export default Slideshow