import { CiSearch, CiWallet } from "react-icons/ci";
import {
  FaCalculator,
  FaCartPlus,
  FaEnvelope,
  FaList,
  FaUser,
  FaUtensils,
} from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex gap-5">
      <div className="w-64 text-white text-lg min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <IoHomeOutline />
                  Amin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additems">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  {" "}
                  <FaList />
                  Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/managebooking">
                  {" "}
                  <TbBrandBooking />
                  Manage Booking
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allusers">
                  {" "}
                  <FaUser />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <IoHomeOutline />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalculator />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  {" "}
                  <FaCartPlus />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentshistory">
                  {" "}
                  <CiWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addreview">
                  {" "}
                  <MdReviews />
                  Add Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mybooking">
                  {" "}
                  <TbBrandBooking />
                  My Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <IoHomeOutline />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <CiSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
