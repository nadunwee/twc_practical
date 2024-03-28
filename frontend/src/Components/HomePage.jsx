import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function HomePage() {
  return (
    <div className="bg-[url('./assets/background.png')] w-screen h-screen bg-cover bg-center text-white	">
      <div className="ml-52 pt-16">
        <img src={logo} alt="twc-logo and name" />
      </div>
      <div className="ml-52 pt-24 max-w-screen-lg	max-h-80">
        <h1 className="font-bold	text-5xl leading-tight	">Welcome,</h1>
        <p className="text-3xl leading-10">
          This is where your contacts will live. Click the button <br /> below
          to add a new contact.
        </p>
        <Link to="/new-contact">
          <button className="rounded-full border-2 text-xl font-normal w-72 h-12 mt-20">
            add your first contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
