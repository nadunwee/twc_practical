import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NewContact() {
  return (
    <div className="bg-[url('./assets/background.png')] w-screen h-screen bg-cover bg-center text-white	">
      <div className="ml-52 pt-16">
        <img src={logo} alt="twc-logo and name" />
      </div>
      <div className="pl-52 pt-10 ">
        <p className="text-5xl font-bold tracking-wide">New Contact</p>
        <input
          type="text"
          name="full-name"
          id="full-name"
          className="border-2 rounded-full font-semibold pl-4 mt-10 mr-6 w-80 h-10 text-twc-green tracking-wide"
          placeholder="full name"
        />
        <input
          type="text"
          name="e-mail"
          id="e-mail"
          className="border-2 rounded-full font-semibold pl-4 mt-4 w-80 h-10 text-twc-green tracking-wide"
          placeholder="e-mail"
        />{" "}
        <br />
        <input
          type="text"
          name="phone-number"
          id="phone-number"
          className="border-2 rounded-full font-semibold pl-4 mt-8 mr-6 w-80 h-10 text-twc-green tracking-wide"
          placeholder="phone number"
        />{" "}
        <label className="font-semibold tracking-wide text-xl mr-8">
          {" "}
          Gender
        </label>
        <input
          type="radio"
          name="gender"
          id="male"
          className="w-4 h-4 bg-twc-green"
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
          placeholder="phone number"
        />
        <label
          htmlFor="female"
          className="font-normal tracking-wide text-xl mr-8 ml-2"
        >
          Female
        </label>{" "}
        <br />
        <button className="rounded-full border-2 text-xl font-normal w-72 h-12 mt-20 mr-4">
          add your contact
        </button>
        {/* align in bottm and add the symbol */}
        <div className="align-top">
          <u>
            <Link className="font-normal text-xl">Logout</Link>
          </u>
        </div>
      </div>
    </div>
  );
}

export default NewContact;
