import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const Ordercard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image: img, name, description, price, _id } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddTocart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        img,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch(); // This will trigger the refetch after adding to cart
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-auto shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link>
            <button
              onClick={() => handleAddTocart(item)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ordercard;
