import { Link } from 'react-router-dom';
import '../styles/error.scss'

function Error() {
    return (
        <div className='error'>
            <p className='number'>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil.</Link>
        </div>
    )
}

export default Error