import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cars from "./pages/Cars/Cars";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "cars",
          element: <Cars />,
        },
        {
          path: "*",
          element: <Error message={t(`errorPage`)} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
};

export default App;
