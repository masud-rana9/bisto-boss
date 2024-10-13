import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const NoheaderandFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="">
      {NoheaderandFooter || <Navbar />}
      <Outlet />
      {NoheaderandFooter || <Footer />}
    </div>
  );
};

export default Main;
