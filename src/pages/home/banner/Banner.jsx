import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      stopOnHover={false}
    >
      <div>
        <img src="/assets/01.jpg" />
      </div>
      <div>
        <img src="/assets/02.jpg" />
      </div>
      <div>
        <img src="/assets/03.png" />
      </div>
      <div>
        <img src="/assets/04.jpg" />
      </div>
      <div>
        <img src="/assets/05.png" />
      </div>
      <div>
        <img src="/public/assets/06.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
