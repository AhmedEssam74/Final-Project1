import HomePage from "../pages/HomePage";
import UserInfo from "../Layout/UserPages/UserInfo"
import UserEditPassword from "../Layout/UserPages/UserEditPassword"
import UserLastResult from "../Layout/UserPages/UserLastResult"
import Login from "../Layout/Auth/Login";
import Register from "../Layout/Auth/Register";
import RecordPage from "../pages/RecordPage";
import ResetPassword from "../Layout/Auth/ResetPassword";
import AdminDashboard from "../Layout/Admin/AdminDashboard";
import Admin from "../Layout/Admin/Admin";
import AdminStauts from "../Layout/Admin/AdminStauts";
import Error404 from "../pages/Error404";
import EditHome from "../Layout/Admin/EditHome";
import AddCard from "../Layout/Admin/AddCard";
import AdminResult from "../Layout/Admin/AdminResult";
import EditSection from "../Layout/Admin/EditSection";

export const RootRoutes = [
    {
        path: '/',
        errorElement: <Error404 />,
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
        element: <Admin />,
        children: [
            {
                path:'dashboard',
                element:<AdminDashboard/>,
            },
            {
                path: 'stauts',
                element: <AdminStauts />,
            },
            {
                path: 'rate',
                element: <AdminResult />,
            },
            {
                path: 'editHome',
                element: <EditHome />,
            },
            {
                path: 'addcard',
                element: <AddCard />,
            },
            {
                path: 'editcard/:id',
                element: <EditSection />,
            },

        ]
    }
]