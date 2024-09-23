import { Helmet } from "react-helmet";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Features from "../features/Features";
import Popular from "../popularmenu/Popular";
import Testimonial from "../testimonial/Testimonial";
import Cover from "../../shared/cover/Cover";
import bannerImg from "../../../../public/assets/banner.jpg";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bisto Boss | Home</title>
      </Helmet>

      <Banner />
      <Category />
      <Popular />
      <Features />
      <Testimonial />
      <Cover img={bannerImg} title={"Bisto boss "} />
    </div>
  );
};

export default Home;
