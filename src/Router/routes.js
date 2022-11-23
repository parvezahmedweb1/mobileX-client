import { createBrowserRouter } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
]);
export default router;
