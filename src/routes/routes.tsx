import Detail from '../pages/detail/Detail'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/:id', component: Detail},
    {path: '/login', component: Login},
    {path: '/register', component: Register, layout: Register}
]