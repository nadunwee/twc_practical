import Contacts from "../Components/Contacts";
import { useAuthContext } from "../Hooks/useAuthContext";

function ContactsPage({ data }) {
  const { user } = useAuthContext();

  async function DeleteBtnHandler(_id, name) {
    const confirmDelete = window.confirm(
      `Do you want to delete contact "${name}"`
    );

    if (confirmDelete) {
      const res = await fetch("http://localhost:4000/" + _id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      //const json = await res.json();
    }
  }

  async function HandleEditBtnClick(values, _id) {
    // Send new content data to backend
    const response = await fetch(`http://localhost:4000/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const json = await response.json();
    }
  }

  return (
    <Contacts
      onDeleteBtnClick={DeleteBtnHandler}
      data={data}
      onEditBtnClick={HandleEditBtnClick}
    />
  );
}

export default ContactsPage;
