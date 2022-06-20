import {
  Outlet,
} from 'react-router-dom';
import NavBar from '../modules/Mbarara/components/Navbar';

const PublicRoute = () => {
  return <>
    <NavBar />
    <Outlet />
  </>
};

export default PublicRoute;