import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";

const router = createBrowserRouter([
  {
    element: <Body />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;