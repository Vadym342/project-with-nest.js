import { Routes, Navigate, Route } from 'react-router-dom';
import Login from '../pages/Authorization/Login';
import Registration from '../pages/Authorization/Registration';
import Mbarara from '../pages/Mbarara/Mbarara';
import MbararaAdmin from '../pages/MbararaAdmin/MbararaAdmin';

const Router = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Mbarara />}
        />
        <Route
          exact
          path="/admin"
          element={
            user?.role === 'ADMIN' && user?.token ? <MbararaAdmin /> : <Navigate to="/" />
          }
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/registration'
          element={<Registration />}
        />
      </Routes>
    </div>
  );
};

export default Router;
