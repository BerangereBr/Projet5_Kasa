import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Error () {
    return ( 
        <div className='container'>
            <div className="homePage">
                <Header />
                <div className='error'> 
                    <p className='number'>404</p>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/">Retourner sur la page d'accueil.</Link>
                </div>
            </div>
        </div>
    )
}

export default Error