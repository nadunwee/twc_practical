import { Link } from "react-router-dom";
import Register from "./Register";

function Login() {
  return (
    <div className="bg-[url('./assets/login.png')] w-screen h-screen bg-cover bg-center text-white">
      <div className="pl-20 pt-36 ">
        <p className="text-5xl font-bold tracking-wide">Hi there,</p>
        <p className="text-3xl font-normal mt-4 tracking-wide">
          Welcome to our <br /> contacts portal
        </p>
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
        <button className="rounded-full border-2 text-xl font-normal w-36 h-12 mt-20 mr-4">
          login
        </button>
        or{" "}
        <u>
          <Link
            className="ml-4 font-normal text-2xl underline-offset-1 "
            to={Register}
          >
            Click Here to Register
          </Link>
        </u>
      </div>
    </div>
  );
}

export default Login;
