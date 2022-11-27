import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.webp";
import { AuthContext } from "../../../contexts/UserContext";
import NavMobile from "../../Others/NavMobile/NavMobile";
const DashboardHeader = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  /*  useEffect(() => {
    fetch(`http://localhost:5000/user?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user.email]); */
  /*  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/${user.email}`);
      const data = await res.json();
      return data;
    },
  });
  console.log(data); */
  const menuItems = (
    <>
      <li className=" text-slate-600 hover:text-secondary delay-100">
        <Link to="/dashboard/orders">My Orders</Link>
      </li>
      <li className=" text-slate-600 hover:text-secondary delay-100">
        <Link to="/dashboard/products">My Products</Link>
      </li>
      <li className=" text-slate-600 hover:text-secondary delay-100">
        <Link to="/dashboard/addProduct">Add Product</Link>
      </li>
      <li className=" text-slate-600 hover:text-secondary delay-100">
        <Link to="/dashboard/allUsers">All Users</Link>
      </li>
    </>
  );
  return (
    <header className="h-16 flex items-center bg-slate-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center z-20">
          <Link to="/">
            <img src={logo} alt="" width="115" />
          </Link>
          {/* nav start */}
          <nav>
            <ul className="hidden lg:flex items-center space-x-7">
              {menuItems}
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

export default DashboardHeader;
