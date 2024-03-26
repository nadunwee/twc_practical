import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import HomePage from "./Components/HomePage";
import NewContact from "./Components/New-Contact";
import RootPage from "./Components/Root";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/new-contact", element: <NewContact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
