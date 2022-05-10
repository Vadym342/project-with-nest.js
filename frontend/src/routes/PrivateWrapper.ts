import { Navigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import routes from '../consts/routes';


const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    const user = `
    (\_/)
    ( ._.)
    />HI
    `;
    return user;
    //return user ? children : <Navigate to='/' replace />;  // ??? Navigate
};

export default PrivateWrapper;