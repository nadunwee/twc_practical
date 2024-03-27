import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import TableRow from "./Table/TableRow";

function Contacts() {
  const navigate = useNavigate();
  function handleBtnClick() {
    navigate("/new-contact");
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

      <div className="ml-52 mr-52 mt-4 rounded-2xl overflow-hidden bg-white">
        <table className="w-full text-base text-left rtl:text-right text-twc-green">
          <thead className="text-xs text-twc-green uppercase bg-white ">
            <tr>
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
            </tr>
          </thead>
          <tbody>
            <TableRow />
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-twc-green whitespace-nowrap "
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contacts;
