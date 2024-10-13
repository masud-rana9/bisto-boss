import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <div className="navbar fixed z-10 bg-transparent max-w-screen-2xl bg-opacity-30 text-white bg-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to="/">
                <a>home</a>
              </Link>
              <Link to="/menu">
                <a>Menu</a>
              </Link>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BistoBoss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <a>Menu</a>
              </Link>
            </li>
            <li>
              <Link to="/secret">
                <a>Secret</a>
              </Link>
            </li>
            <li>
              <Link to="/order/salad">
                <a>Order</a>
              </Link>
            </li>

            <li>
              {user ? (
                <Link>
                  <span className="text-white">{user?.displayName}</span>
                  <button onClick={handleLogOut} className="">
                    Logout
                  </button>
                </Link>
              ) : (
                <>
                  <Link to="/login">
                    <a>Login</a>
                  </Link>
                </>
              )}
            </li>
            <li>
              <Link to="/dashboard/cart">
                <button className="btn">
                  <FaCartShopping />
                  <div className="badge badge-secondary">+{cart.length}</div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Getstarted</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
