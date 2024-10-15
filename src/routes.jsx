import { createBrowserRouter } from "react-router-dom";
import AppMainLayout from "./components/AppMainLayout";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

const routes = createBrowserRouter([
  {
    element: <AppMainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default routes;
