import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import BgImg from "../../../public/assets/banner3.jpg";
import MenuCategory from "./menucategory/MenuCategory";
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle";
const Menu = () => {
  const [menu] = UseMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="">
      <Helmet>
        <title>Bisto Boss | Menu</title>
      </Helmet>
      <Cover img={BgImg} title="Our Menu" />
      <SectionTitle headerTitle="Do Not Miss" header="Todays Offfer" />
      <MenuCategory items={offered} title="offered" />
      <Cover img={BgImg} title="salad" />
      <MenuCategory items={salad} title="salad" />
      <Cover img={BgImg} title="soup" />
      <MenuCategory items={soup} title="soup" />
      <Cover img={BgImg} title="dessert" />
      <MenuCategory items={dessert} title="dessert" />
      <Cover img={BgImg} title="drinks" />
      <MenuCategory items={drinks} title="drinks" />
      <Cover img={BgImg} title="pizza" />
      <MenuCategory items={pizza} title="pizza" />
    </div>
  );
};

export default Menu;
