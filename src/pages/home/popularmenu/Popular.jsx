import SectionTitle from "../../../components/SectionTitle";
import MenuItemCard from "../../shared/menucard/menuItemCard";
import UseMenu from "../../../hooks/UseMenu";
//import Category from "../category/Category";

const Popular = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       const popularItem = data.filter((item) => item.category === "popular");
  //       setMenu(popularItem);
  //     });
  // }, []);
  return (
    <section className="mb-10">
      <SectionTitle
        header={"FROM OUR MENU"}
        headerTitle={"---Check it out---"}
      />

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
