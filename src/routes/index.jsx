import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Assignment from "../pages/Assignment/Assignment";
import PrivateRoute from "./PrivateRoute";
import CreateAssignment from "../pages/Assignment/CreateAssignment/CreateAssignment";
import NotFoundPage from "../pages/Error/NotFoundPage";
import AssignmentDetails from "../pages/Assignment/AssignmentDetails";
import UpdatedAssignment from "../pages/Assignment/UpdatedAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import AllSubmittedAssignment from "../pages/AllSubmittedAssignment/AllSubmittedAssignment";
import GiveMark from "../pages/AllSubmittedAssignment/GiveMark";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-assignment",
        element: <Assignment />,
      },
      {
        path: "createAssignment",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },

      {
        path: "assignment-details/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.id}`),
      },

      {
        path: "updateAssignment/:id",
        element: (
          <PrivateRoute>
            <UpdatedAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignment/${params.id}`),
      },

      {
        path: "my-submitted-assignment",
        element: (
          <PrivateRoute>
            <MyAssignment />
          </PrivateRoute>
        ),
      },

      {
        path: "all-submitted-assignment",
        element: (
          <PrivateRoute>
            <AllSubmittedAssignment />
          </PrivateRoute>
        ),
      },

      {
        path: "give-submitted-assignment-mark/:id",
        element: (
          <PrivateRoute>
            <GiveMark />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/all-submitted-assignment/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
