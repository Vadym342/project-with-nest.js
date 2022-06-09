const routes = {
    AuthRoutes: {
        pathToAdmin :'/admin',
        pathToCreateProduct : '/admin/create/product',
        pathToCreateUser : '/admin/create/user',
    },
    NonAuthRoutes: {
        pathToHome : '/',
        pathToLogin: '/login',
        pathToRegistration: '/registration',
    }
}

export default routes;