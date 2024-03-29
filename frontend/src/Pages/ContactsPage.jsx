// import { useEffect, useState } from "react";
// import Contacts from "../Components/Contacts";
// import { useAuthContext } from "../Hooks/useAuthContext";

// function ContactsPage() {
//   const [contacts, setContacts] = useState([]);
//   const user = useAuthContext();
//   console.log(user.user.token);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       const res = await fetch("http://localhost:4000/contacts", {
//         headers: { Authorization: `Bearer ${user.token}` },
//       });
//       const json = await res.json();
//       setContacts(json);
//     };
//     if (user) {
//       fetchContacts();
//     }
//   }, [user]);
//   console.log(contacts);

//   return <Contacts data={contacts} />;
// }

// export default ContactsPage;
