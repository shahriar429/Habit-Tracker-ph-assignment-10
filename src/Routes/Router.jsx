import { createBrowserRouter } from "react-router";
import { Component } from "react";
import HomeLayout from "../layout/HomeLayout/HomeLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {

      },
      // {
      //   path: "add-transactions",
      //   element: (
      //     <PrivateRoutes>
      //       <AddTransaction />
      //     </PrivateRoutes>
      //   ),
      // },
      // {
      //   path: "my-transactions",
      //   element: (
      //     <PrivateRoutes>
      //       <MyTransactions />
      //     </PrivateRoutes>
      //   ),
      // },
      // {
      //   path: "transactions/:id",
      //   element: (
      //     <PrivateRoutes>
      //       <TransactionDetails />
      //     </PrivateRoutes>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://finease-server-c7jy.onrender.com/transactions/${params.id}`
      //     ),
      // },
      // {
      //   path: "transactions/update/:id",
      //   element: (
      //     <PrivateRoutes>
      //       <UpdateTransactions />
      //     </PrivateRoutes>
      //   ),
      // },
      // {
      //   path: "login",
      //   Component: Login,
      // },
      // {
      //   path: "register",
      //   Component: Register,
      // },
      // {
      //   path: "profile",
      //   element: (
      //     <PrivateRoutes>
      //       <MyProfile />
      //     </PrivateRoutes>
      //   ),
      // },
      // {
      //   path: "reports",
      //   element: (
      //     <PrivateRoutes>
      //       <ReportCharts />
      //     </PrivateRoutes>
      //   ),
      // },
    ],
  },
  // {
  //   path: "*",
  //   Component: Error404,
  // },
]);
