import { Routes, Navigate, Route } from 'react-router-dom';
import { useAppSelector } from '../hooks/hook';
import CreateProduct from '../modules/MbararaAdmin/components/CreateProduct/CreateProduct';
import Login from '../pages/Authorization/Login';
import Registration from '../pages/Authorization/Registration';
import Mbarara from '../pages/Mbarara/Mbarara';
import MbararaAdmin from '../pages/MbararaAdmin/MbararaAdmin';
import { userSelector } from '../redux';
import ProtectedRoute from './protectedRoute';
import routes from './routesPath';

const Router = () => {
  const user = useAppSelector(userSelector);

  return (
    <div>
      <Routes>
        <Route
          index
          path={routes.NonAuthRoutes.pathToHome}
          element={<Mbarara />}
        />
        <Route element={<ProtectedRoute user={user} />}>
          <Route exact path={routes.AuthRoutes.pathToAdmin} element={<MbararaAdmin />} />
          <Route exact path={routes.AuthRoutes.pathToCreateProduct} element={<CreateProduct />} />
        </Route>

        <Route
          path={routes.NonAuthRoutes.pathToLogin}
          element={<Login />}
        />
        <Route
          path={routes.NonAuthRoutes.pathToRegistration}
          element={<Registration />}
        />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
};

export default Router;
