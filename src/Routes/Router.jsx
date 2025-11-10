import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import MyProfile from "../Pages/Profile/MyProfile";
import AddHabit from "../Pages/Habits/AddHabit";
import MyHabits from "../Pages/Habits/MyHabits";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home
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
      },
      {
        path: 'add-habit',
        Component: AddHabit
      },
      {
        path: 'my-habits',
        Component: MyHabits
      }
    ]
  }
]);