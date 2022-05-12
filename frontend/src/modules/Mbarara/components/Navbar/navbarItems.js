import routes from '../../../../consts/routes';

const fieldsForSideBar = {
    Admin: [
        {
        }
    ],
    User: [
        {
            route: routes.NonAuthRoutes.pathToHome,
            title: 'Home',
        },
        {
            route: routes.NonAuthRoutes.pathToOrders,
            title: 'Orders'
        },
        {
            route: routes.NonAuthRoutes.pathToCreateOrder,
            title: 'Create Order'
        }
    ]
}

export default fieldsForSideBar;