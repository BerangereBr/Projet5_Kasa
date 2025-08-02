function Banner ({image, text}) {
    return (
        <div className='banner'>
            <img src={image} alt="image de la banniere"/>
            <div className='overlay'>
                {text && <p>{text}</p>}
            </div>
        </div>
    )
}

export default Banner