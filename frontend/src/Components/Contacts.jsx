/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import deleteImg from "../assets/delete.png";
import malePic from "../assets/male.png";
import femalePic from "../assets/female.png";
import { useLogout } from "../Hooks/useLogout";
import logoutImg from "../assets/logout.png";
import editImg from "../assets/edit.png";
import { useState } from "react";

function Contacts({ data, onDeleteBtnClick, onEditBtnClick }) {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const [editBtnClicked, setEditBtnClicked] = useState(false);
  const [editingContactId, setEditingContactId] = useState(null);
  const [editedContact, setEditedContact] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });

  function handleBtnClick() {
    navigate("/new-contact");
  }

  function HandleDeleteBtnClick(_id, name) {
    onDeleteBtnClick(_id, name);
  }

  function HandleEditBtnClick(_id, contact) {
    setEditBtnClicked(true);
    setEditingContactId(_id);
    setEditedContact(contact);
  }

  function handleInputChange(identifier, value) {
    setEditedContact((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleSaveBtnClick(_id) {
    onEditBtnClick(editedContact, _id);
  }

  function handleClick() {
    logout();
  }

  return (
    <div className="bg-[url('./assets/background.png')] w-screen h-screen bg-cover bg-center text-white	">
      <div className="ml-52 pt-16">
        <img src={logo} alt="twc-logo and name" />
      </div>
      <div className="pl-52 pt-10 ">
        <p className="text-5xl font-bold tracking-wide">Contacts</p>
        <button
          className="rounded-full border-2 text-xl font-normal w-72 h-12 ml-[600px]"
          onClick={handleBtnClick}
        >
          add new contact
        </button>
      </div>

      <div className="ml-52 mr-52 mt-4 rounded-2xl bg-white overflow-auto max-h-[350px] overflow-x-auto font-futurab">
        <table className="w-full text-base text-left rtl:text-right text-twc-green">
          <thead className="text-xs text-twc-green uppercase bg-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                profile pic
              </th>
              <th scope="col" className="px-6 py-3">
                full name
              </th>
              <th scope="col" className="px-6 py-3">
                gender
              </th>
              <th scope="col" className="px-6 py-3">
                e-mail
              </th>
              <th scope="col" className="px-6 py-3">
                phone number
              </th>
              <th scope="col" className="px-4 py-3">
                edit
              </th>
              <th scope="col" className="px-4 py-3">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((contact, index) => (
              <tr key={index} className="bg-white ">
                <td className="px-6 py-4">
                  {contact.gender !== "male" ? (
                    <img src={femalePic} alt="female profile pic" />
                  ) : (
                    <img src={malePic} alt="male profile pic" />
                  )}
                </td>
                <td className="px-6 py-4">
                  {editBtnClicked && contact._id == editingContactId ? (
                    <input
                      type="text"
                      className="bg-slate-300 text-twc-green  focus:outline-none pl-2 pr-2"
                      defaultValue={editedContact.name}
                      onChange={(event) =>
                        handleInputChange("name", event.target.value)
                      }
                    />
                  ) : (
                    contact.name
                  )}
                </td>
                <td className="px-6 py-4">
                  {editBtnClicked && contact._id == editingContactId ? (
                    <input
                      type="text"
                      className="bg-slate-300 text-twc-green  focus:outline-none pl-2 pr-2 max-w-20"
                      defaultValue={editedContact.gender}
                      onChange={(event) =>
                        handleInputChange("gender", event.target.value)
                      }
                    />
                  ) : (
                    contact.gender
                  )}
                </td>
                <td className="px-6 py-4">
                  {editBtnClicked && contact._id == editingContactId ? (
                    <input
                      type="text"
                      className="bg-slate-300 text-twc-green  focus:outline-none pl-2 pr-2"
                      defaultValue={editedContact.email}
                      onChange={(event) =>
                        handleInputChange("email", event.target.value)
                      }
                    />
                  ) : (
                    contact.email
                  )}
                </td>
                <td className="px-6 py-4">
                  {editBtnClicked && contact._id == editingContactId ? (
                    <input
                      type="text"
                      className="bg-slate-300 text-twc-green  focus:outline-none pl-2 pr-2 max-w-28"
                      defaultValue={editedContact.phoneNumber}
                      onChange={(event) =>
                        handleInputChange("phoneNumber", event.target.value)
                      }
                    />
                  ) : (
                    contact.phoneNumber
                  )}
                </td>
                {editBtnClicked && contact._id == editingContactId ? (
                  <button
                    onClick={() => handleSaveBtnClick(contact._id)}
                    className="bg-twc-green text-white p-2 rounded-full w-[72px] h-35[px]  mt-4 font-futurab"
                  >
                    save
                  </button>
                ) : (
                  <>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => HandleEditBtnClick(contact._id, contact)}
                      >
                        <img src={editImg} alt="Edit image" />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          HandleDeleteBtnClick(contact._id, contact.name)
                        }
                      >
                        <img src={deleteImg} alt="delete image" />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="fixed bottom-10 right-10 flex items-center ml-[500px] space-x-2"
        onClick={handleClick}
      >
        <img src={logoutImg} alt="delete image" />
        <u>
          <Link className="font-normal text-xl">Logout</Link>
        </u>
      </div>
    </div>
  );
}

export default Contacts;
