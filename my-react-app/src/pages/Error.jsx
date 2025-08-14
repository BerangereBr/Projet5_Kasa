import { Link } from 'react-router-dom';
import '../styles/error.scss'

function Error() {
    return (
        <div className='error'>
            <p className='number'>404</p>
            <p className='error__text'></p>
            <Link to="/">Retourner sur la page d'accueil.</Link>
        </div>
    )
}

export default Error