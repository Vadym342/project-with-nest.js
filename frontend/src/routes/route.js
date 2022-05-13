import { Routes, Navigate, Route } from 'react-router-dom';
import NavBar from '../modules/Mbarara/components/Navbar';
import Mbarara from '../pages/Mbarara/Mbarara';
import MbararaAdmin from '../pages/MbararaAdmin/MbararaAdmin';

const Router = () => {
  const user = {
    token: 'dfdsf',
    role: 'ADMIN',
  }

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
            user.role === 'ADMIN' && user.token ? <MbararaAdmin/> : <Navigate to="/"/>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
