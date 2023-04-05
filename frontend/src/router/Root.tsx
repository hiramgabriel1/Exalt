import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/log/Login";
import Home from "../pages/home/Home";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);
