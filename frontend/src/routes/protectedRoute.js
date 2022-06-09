import {
  Navigate,
  Outlet,
} from 'react-router-dom';
import routes from './routesPath';
import MenuAppBar from '../modules/MbararaAdmin/components/SideBar/AppBar';
const ProtectedRoute = ({
  user,
  redirectPath = `${routes.NonAuthRoutes.pathToHome}`,
}) => {
  return user?.user?.role === 'ADMIN' && user?.token
    ?
    <>
      <MenuAppBar />
      <Outlet />
    </>
    :
    <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;