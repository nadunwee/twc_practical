import { useEffect, useState } from "react";

import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import HomePage from "./Components/HomePage";
import RootPage from "./Components/Root";
import { useAuthContext } from "./Hooks/useAuthContext";
import NewContentPage from "./Pages/NewContactPage";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ContactsPage from "./Pages/ContactsPage";

function App() {
  const { user } = useAuthContext();

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("http://localhost:4000/contacts", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await res.json();
      setContacts(json);
    };
    if (user) {
      fetchContacts();
    }
  }, [user]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: user ? (
            contacts.length > 0 ? (
              <ContactsPage data={contacts} />
            ) : (
              <HomePage />
            )
          ) : (
            <Navigate to="/login" />
          ),
        },
        { path: "/login", element: !user ? <Login /> : <Navigate to="/" /> },
        {
          path: "/register",
          element: !user ? <Register /> : <Navigate to="/" />,
        },
        {
          path: "/new-contact",
          element: user ? <NewContentPage /> : <Navigate to="/login" />,
        },
        {
          path: "/contacts",
          element: user ? (
            contacts.length > 0 ? (
              <ContactsPage data={contacts} />
            ) : (
              <HomePage />
            )
          ) : (
            <Navigate to="/login" />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
