function Banner ({image, text}) {
    return (
        <div className='banner'>
            <img src={image} alt="image de la banniere"/>
            <div className={ text ? 'overlay' : 'overlayLow'}>
                {text ? <p>{text}</p> : null}
            </div>
        </div>
    )
}

export default Banner