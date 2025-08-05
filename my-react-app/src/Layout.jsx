import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';

function Layout () {
    return ( 
        <div className="app">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout