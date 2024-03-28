import { useEffect, useState } from "react";
import Contacts from "../Components/Contacts";

function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("http://localhost:4000/contacts");
      const json = await res.json();
      setContacts(json);
    };
    fetchContacts();
  }, []);

  return <Contacts data={contacts} />;
}

export default ContactsPage;
