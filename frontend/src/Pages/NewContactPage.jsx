import { useNavigate } from "react-router-dom";

import NewContact from "../Components/New-Contact";
import { useAuthContext } from "../Hooks/useAuthContext";

function NewContentPage() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  function addContentHandler(newContact) {
    //send new content data to backend
    fetch("http://localhost:4000/contact/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("contacts added");
          window.location.reload();
          navigate("/contacts");
        } else {
          console.log("No Content Added");
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <NewContact onAddContact={addContentHandler} />;
}

export default NewContentPage;
