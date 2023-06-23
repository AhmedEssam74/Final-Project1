import HomePage from "../pages/HomePage";
import UserInfo from "../Layout/UserPages/UserInfo"
import UserEditPassword from "../Layout/UserPages/UserEditPassword"
import UserLastResult from "../Layout/UserPages/UserLastResult"
import Login from "../Layout/Auth/Login";
import Register from "../Layout/Auth/Register";
import RecordPage from "../pages/RecordPage";
import ResetPassword from "../Layout/Auth/ResetPassword";
import AdminDashboard from "../Layout/Admin/AdminDashboard";

export const RootRoutes = [
    {
        path: '/',
        errorElement: <h1>404</h1>,
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/reset-password',
        element: <ResetPassword />
    },
    {
        path: 'home',
        element: <HomePage />,
    },
    {
        path: 'record',
        element: <RecordPage />
    },
    {
        path: '/userEditPassword',
        element: <UserEditPassword />
    },
    {
        path: '/userLastResult',
        element: <UserLastResult />
    },
    {
        path: 'userinfo',
        element: <UserInfo />,
    },
    {
        path: 'admin',
        element: <AdminDashboard />
    }
]