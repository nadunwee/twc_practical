import { Link } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../../Hooks/useRegister";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(email, password);
  };

  return (
    <div className="bg-[url('./assets/login.png')] w-screen h-screen bg-cover bg-center text-white">
      <div className="pl-20 pt-36 ">
        <p className="text-5xl font-bold tracking-wide">Register Now!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            className="border-2 rounded-full font-semibold pl-4 mt-10 w-80 h-10 text-twc-green tracking-wide"
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 rounded-full font-semibold pl-4 mt-4 w-80 h-10 text-twc-green tracking-wide"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
          <br />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            className="border-2 rounded-full font-semibold pl-4 mt-4 w-80 h-10 text-twc-green tracking-wide"
            placeholder="confirm-password"
          />{" "}
          <br />
          <button
            type="submit"
            className="rounded-full border-2 text-xl font-normal w-36 h-12 mt-10 mr-4"
            disabled={isLoading}
          >
            Register
          </button>
          {error && <div className="mt-2 text-yellow-400">{error}</div>}
        </form>
      </div>
      <div className="pl-20 mt-20">
        <u className="pt-6">
          <Link
            className="ml-4 font-normal text-xl underline-offset-1"
            to={"/login"}
          >
            {"<"} back to login
          </Link>
        </u>
      </div>
    </div>
  );
}

export default Register;
