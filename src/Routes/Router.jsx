import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import MyProfile from "../Pages/Profile/MyProfile";
import AddHabit from "../Pages/Habits/AddHabit";
import MyHabits from "../Pages/Habits/MyHabits";
import Home from "../Pages/Home/Home";
import PublicHabits from "../Pages/Habits/PublicHabits";
import HabitDetails from "../Pages/Habits/HabitDetails";
import UpdateHabit from "../Pages/Habits/UpdateHabit";
import Error404 from "../Pages/Error404";

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
      },
      {
        path: 'public-habits',
        Component: PublicHabits
      },
      {
        path: 'habits/:id',
        Component: HabitDetails,
      },
      {
        path: 'habits/update/:id',
        Component: UpdateHabit
      },
      {
        path: '*',
        Component: Error404
      }
    ],
  }
]);