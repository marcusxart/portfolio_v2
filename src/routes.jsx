import { createBrowserRouter } from "react-router-dom";
import AppMainLayout from "./components/AppMainLayout";
import Home from "./pages/home";

const routes = createBrowserRouter([
  {
    element: <AppMainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default routes;
