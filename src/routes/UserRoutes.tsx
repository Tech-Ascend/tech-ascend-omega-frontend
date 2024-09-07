import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ArrayRoutes from "./ArrayRoutes";

function UserRoutes() {
  return createBrowserRouter(
    createRoutesFromElements(<Route>{ArrayRoutes()}</Route>),
  );
}

export default UserRoutes;
