/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout.jsx";
import logoutImg from "../assets/logout.png";

function NewContact({ onAddContact }) {
  const { logout } = useLogout();

  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });

  const [didEdit, setDidEdit] = useState(false);

  const emailIsInvalid = didEdit && !enteredValues.email.includes("@");

  function submitHandler(event) {
    event.preventDefault();

    onAddContact(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  function handleClick() {
    console.log("logout");
    logout();
  }

  return (
    <div className="bg-[url('./assets/background.png')] w-screen h-screen bg-cover bg-center text-white	">
      <div className="ml-52 pt-16">
        <img src={logo} alt="twc-logo and name" />
      </div>
      <div className="pl-52 pt-10 ">
        <p className="text-5xl font-bold tracking-wide">New Contact</p>
        <form action="" method="post" onSubmit={submitHandler}>
          <input
            type="text"
            name="full-name"
            id="full-name"
            className="border-2 rounded-full font-semibold pl-4 mt-10 mr-6 w-80 h-10 text-twc-green tracking-wide"
            placeholder="full name"
            onChange={(event) => handleInputChange("name", event.target.value)}
            value={enteredValues.name}
          />
          <input
            type="text"
            name="e-mail"
            id="e-mail"
            className="border-2 rounded-full font-semibold pl-4 mt-4 w-80 h-10 text-twc-green tracking-wide"
            placeholder="e-mail"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
            onBlur={handleInputBlur}
          />
          <div className="ml-96 mt-2 text-yellow-400">
            {emailIsInvalid && <p>Please Enter valid Email address</p>}
          </div>
          <br />
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="border-2 rounded-full font-semibold pl-4 mr-6 w-80 h-10 text-twc-green tracking-wide"
            placeholder="phone number"
            onChange={(event) =>
              handleInputChange("phoneNumber", event.target.value)
            }
            value={enteredValues.phoneNumber}
          />{" "}
          <label className="font-semibold tracking-wide text-xl mr-8">
            Gender
          </label>
          <input
            type="radio"
            name="gender"
            id="male"
            className="w-4 h-4 bg-twc-green"
            value="male"
            onChange={(event) =>
              handleInputChange("gender", event.target.value)
            }
          />
          <label
            htmlFor="male"
            className="font-normal tracking-wide text-xl mr-8 ml-2"
          >
            Male
          </label>{" "}
          <input
            type="radio"
            name="gender"
            id="female"
            className="w-4 h-4 bg-twc-green"
            value="female"
            onChange={(event) =>
              handleInputChange("gender", event.target.value)
            }
          />
          <label
            htmlFor="female"
            className="font-normal tracking-wide text-xl mr-8 ml-2"
          >
            Female
          </label>{" "}
          <br />
          <button
            type="submit"
            className="rounded-full border-2 text-xl font-normal w-72 h-12 mt-20 mr-4"
          >
            add your contact
          </button>
        </form>

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
    </div>
  );
}

export default NewContact;
