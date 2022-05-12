import { Routes, Route } from 'react-router-dom';
import NavBar from '../modules/Mbarara/components/Navbar';
import Mbarara from '../pages/Mbarara/Mbarara';

const Router = () => {
  return (
    <div>
      <NavBar />
      <Routes>
          <Route
            path='/' 
            element={<Mbarara/>}
          
          />
      </Routes>
    </div>
  );
};

export default Router;
