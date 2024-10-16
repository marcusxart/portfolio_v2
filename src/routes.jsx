import { createBrowserRouter } from "react-router-dom";
import AppMainLayout from "./components/AppMainLayout";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import Portfoilo from "./pages/portfoilo";

const routes = createBrowserRouter([
  {
    element: <AppMainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfoilo", element: <Portfoilo /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default routes;
