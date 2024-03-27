import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Contacts from "./Components/Contacts";
import HomePage from "./Components/HomePage";
import RootPage from "./Components/Root";
import NewContentPage from "./Pages/NewContactPage";
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
        { path: "/new-contact", element: <NewContentPage /> },
        { path: "/contacts", element: <Contacts /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
