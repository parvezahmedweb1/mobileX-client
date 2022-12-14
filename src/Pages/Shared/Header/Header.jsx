import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.webp";
import { AuthContext } from "../../../contexts/UserContext";
import NavMobile from "../../Others/NavMobile/NavMobile";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const menuItems = (
    <>
      <li className=" text-slate-600 hover:text-secondary delay-100">
        <Link to="/home">Home</Link>
      </li>
      <li className=" text-slate-600 hover:text-secondary delay-100">
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && user.uid && (
        <li className=" text-slate-600 hover:text-secondary delay-100">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li className=" text-slate-600 hover:text-secondary delay-100">
        <Link to="/about">About</Link>
      </li>
      <li className=" text-slate-600 hover:text-secondary delay-100">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <header className="h-16 flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center z-20">
          <Link to="/">
            <img src={logo} alt="" width="115" />
          </Link>
          {/* nav start */}
          <nav>
            <ul className="hidden lg:flex items-center space-x-7">
              {menuItems}
              <span className="text-slate-600">|</span>
              <Link to="/signIn">
                {user ? (
                  <button
                    onClick={logout}
                    className="bg-primary flex items-center font-semibold px-10 rounded-full py-2 text-secondary hover:bg-secondary hover:text-white delay-100"
                  >
                    Sign Out{" "}
                    <span>
                      <ArrowRightOnRectangleIcon className="w-5 h-5 ml-1" />
                    </span>
                  </button>
                ) : (
                  <button className="bg-primary flex items-center font-semibold px-10 rounded-full py-2 text-secondary hover:bg-secondary hover:text-white delay-100">
                    Sign In{" "}
                    <span>
                      <ArrowRightOnRectangleIcon className="w-5 h-5 ml-1" />
                    </span>
                  </button>
                )}
              </Link>
            </ul>
          </nav>
          {/* nav end */}
          {/* nav mobile */}
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
