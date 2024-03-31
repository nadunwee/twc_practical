import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <div className="bg-[url('./assets/login.png')] w-screen h-screen bg-cover bg-center text-white">
      <div className="pl-20 pt-36 ">
        <p className="text-5xl font-bold tracking-wide">Hi there,</p>
        <p className="text-3xl font-normal mt-4 tracking-wide">
          Welcome to our <br /> contacts portal
        </p>
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
          <button
            type="submit"
            className="rounded-full border-2 text-xl font-normal w-36 h-12 mt-20 mr-4"
            disabled={isLoading}
          >
            login
          </button>
          {error && <div className="mt-2 text-yellow-400">{error}</div>}
          or{" "}
          <u>
            <Link
              className="ml-4 font-normal text-2xl underline-offset-1 "
              to={"/register"}
            >
              Click Here to Register
            </Link>
          </u>
        </form>
      </div>
    </div>
  );
}

export default Login;
