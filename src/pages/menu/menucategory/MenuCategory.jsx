import { Link } from "react-router-dom";
import MenuItemCard from "../../shared/menucard/menuItemCard";

const MenuCategory = ({ items = [], title }) => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center min-w-full">
        <button className="text-2xl bg-black text-white py-5 px-10  my-10 rounded-md">
          {" "}
          Views details
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
