import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import { Movie } from "../pages/Movie";
import { NotFound } from "../pages/NotFound";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/movie/:slug", element: <Movie /> },
    { path: "*", element: <NotFound /> },
  ]);
};
