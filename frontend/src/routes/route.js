import { Routes, Route } from 'react-router-dom';
import CreateOrder from '../components/CreateOrder';
import Home from '../components/Home';
import Orders from '../components/Orders';
import routes from '../consts/routes';
import NavBar from '../components/Navbar';

const Router = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route
                    path={routes.NonAuthRoutes.pathToCreateOrder}
                    element={<CreateOrder />}
                />
                <Route
                    path={routes.NonAuthRoutes.pathToHome}
                    element={<Home />}
                />
                <Route
                    path={routes.NonAuthRoutes.pathToOrders}
                    element={<Orders />}
                />
            </Routes>
        </div>
    )
}

export default Router;