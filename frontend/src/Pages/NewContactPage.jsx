import { useNavigate } from "react-router-dom";
import Axios from "axios";

import NewContact from "../Components/New-Contact";

function NewContentPage() {
  const navigate = useNavigate();

  function addContentHandler(newContact) {
    //send new content data to backend
    Axios.post("http://localhost:4000/contact/new", newContact)
      .then((response) => {
        if (response.status == 200) {
          console.log("contacts added");
          window.location.reload();
          navigate("/contacts");
        } else {
          console.log("No Content Added");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <NewContact onAddContact={addContentHandler} />;
}

export default NewContentPage;
