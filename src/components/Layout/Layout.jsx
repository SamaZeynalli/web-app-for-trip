import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({children}) => {
    return(
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}

export default Layout;