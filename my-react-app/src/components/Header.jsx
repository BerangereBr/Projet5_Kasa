import { NavLink } from 'react-router-dom'
import LOGO from '../assets/LOGO.png'
import '../styles/main.scss'

function Header() {
    return (
        <div className='header'>
            <img src={LOGO} alt="Logo Kasa" />
            <nav>
                <NavLink to="/" className={({isActive}) => isActive ? 'nav active' : 'nav'}>Accueil</NavLink>
                <NavLink to="/a-propos" className={({isActive}) => isActive ? 'nav active' : 'nav'}>A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header