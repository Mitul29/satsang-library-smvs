import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RequiresAuth from "../modules/Auth/components/RequiresAuth";
import RequiresUnAuth from "../modules/Auth/components/RequiresUnAuth";
import Loader from "../components/Loader";

const Login = React.lazy(() => import("../modules/Auth/pages/Login"));
const Home = React.lazy(() => import("../modules/Dashboard/pages/Home"));
const Matter = React.lazy(() => import("../modules/Dashboard/pages/Matter"));

const NotFound = React.lazy(() => import("../modules/Auth/pages/NotFound"));

const Routes = () => {
  const authenticatedRoutes = [
    {
      element: <RequiresAuth />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      element: <RequiresAuth />,
      children: [{ path: "/matter/:id", element: <Matter /> }],
    },
  ];
  const nonAuthenticatedRoutes = [
    {
      element: <RequiresUnAuth />,
      children: [{ path: "/login", element: <Login /> }],
    },
  ];
  const notFound = [{ path: "*", element: <NotFound /> }];

  const router = createBrowserRouter([
    ...authenticatedRoutes,
    ...nonAuthenticatedRoutes,
    ...notFound,
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
