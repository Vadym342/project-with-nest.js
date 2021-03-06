const routes = {
    AuthRoutes: {
        pathToAdmin: '/admin',
        pathToCreateProduct: '/admin/create/product',
        pathToCreateCategory: '/admin/create/category',
        pathToCreateUser: '/admin/create/user',
    },
    NonAuthRoutes: {
        pathToHome: '/',
        pathToLogin: '/login',
        pathToRegistration: '/registration',
        pathToProductList: '/product/search/'
    }
}

export default routes;