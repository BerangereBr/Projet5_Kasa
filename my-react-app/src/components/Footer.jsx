import LogoFooter from '../assets/LogoFooter.png'

function Footer() {
    return (
        <div className='footer'>
            <img src={LogoFooter} alt='Logo Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer