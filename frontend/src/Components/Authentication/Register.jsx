import { Link } from "react-router-dom";
import Login from "./Login";

function Register() {
  return (
    <div className="bg-[url('./assets/login.png')] w-screen h-screen bg-cover bg-center text-white">
      <div className="pl-20 pt-36 ">
        <p className="text-5xl font-bold tracking-wide">Register Now!</p>
        <input
          type="text"
          name="email"
          id="email"
          className="border-2 rounded-full font-semibold pl-4 mt-10 w-80 h-10 text-twc-green tracking-wide"
          placeholder="e-mail"
        />{" "}
        <br />
        <input
          type="text"
          name="password"
          id="password"
          className="border-2 rounded-full font-semibold pl-4 mt-4 w-80 h-10 text-twc-green tracking-wide"
          placeholder="password"
        />{" "}
        <br />
        <input
          type="text"
          name="confirm-password"
          id="confirm-password"
          className="border-2 rounded-full font-semibold pl-4 mt-4 w-80 h-10 text-twc-green tracking-wide"
          placeholder="confirm-password"
        />{" "}
        <br />
        <button className="rounded-full border-2 text-xl font-normal w-36 h-12 mt-10 mr-4">
          Register
        </button>{" "}
      </div>
      <div className="pl-20 mt-20">
        <u className="pt-6">
          <Link
            className="ml-4 font-normal text-xl underline-offset-1"
            to={Login}
          >
            {"<"} back to login
          </Link>
        </u>
      </div>
    </div>
  );
}

export default Register;
