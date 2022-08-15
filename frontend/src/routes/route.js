import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../hooks/hook';
import ProductList from '../modules/Mbarara/components/ProductList/ProductList/ProductList';
import CreateCategory from '../modules/MbararaAdmin/components/CategoryPage/CreateCategory';
import CreateProduct from '../modules/MbararaAdmin/components/CreateProduct/CreateProduct';
import Login from '../pages/Authorization/Login';
import Registration from '../pages/Authorization/Registration';
import Mbarara from '../pages/Mbarara/Mbarara';
import MbararaAdmin from '../pages/MbararaAdmin/MbararaAdmin';
import { userSelector } from '../redux';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import routes from './routesPath';
import CategoryPage from './../modules/MbararaAdmin/components/CategoryPage/CategoryPage';

const Router = () => {
  const user = useAppSelector(userSelector);

  return (
    <div>
      <Routes>

        <Route element={<PublicRoute />}>
          <Route index path={routes.NonAuthRoutes.pathToHome} element={<Mbarara />} />
          <Route exact path={`${routes.NonAuthRoutes.pathToProductList}:id`} element={<ProductList />} />
        </Route>

        <Route element={<PrivateRoute user={user} />}>
          <Route exact path={routes.AuthRoutes.pathToAdmin} element={<MbararaAdmin />} />
          <Route exact path={routes.AuthRoutes.pathToCreateProduct} element={<CreateProduct />} />
          <Route exact path={routes.AuthRoutes.pathToCreateCategory} element={<CategoryPage />} />
        </Route>

        <Route
          path={routes.NonAuthRoutes.pathToLogin}
          element={<Login />}
        />
        <Route
          path={routes.NonAuthRoutes.pathToRegistration}
          element={<Registration />}
        />
        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
};

export default Router;
