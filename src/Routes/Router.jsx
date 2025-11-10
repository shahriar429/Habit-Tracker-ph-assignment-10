import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import MyProfile from "../Pages/Profile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        // index: true,
        // Component: 
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'profile',
        Component: MyProfile
      }
    ]
  }
]);