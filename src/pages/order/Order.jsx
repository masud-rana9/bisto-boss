import Cover from "../shared/cover/Cover";
import ShopImg from "../../../public/assets/banner.jpg";
import AppTab from "../shared/tab/AppTab";
const Order = () => {
  return (
    <div className="">
      <Cover img={ShopImg} title={"Our Shop"} />
      <AppTab />
    </div>
  );
};

export default Order;
