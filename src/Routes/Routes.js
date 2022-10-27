import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import Courses from "../pages/Courses/Courses";
import CoursesDetails from "../pages/CoursesDetails/CoursesDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch('https://learning-server-dun.vercel.app/courses-details')
            },
            {
                path: '/check/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params})=> fetch(`https://learning-server-dun.vercel.app/courses-details/${params.id}`)
            },
            {
                path: '/course-details/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({params})=> fetch(`https://learning-server-dun.vercel.app/courses-details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    },
    {
        path: '*',
        element:<NotFoundPage/>
    }
])