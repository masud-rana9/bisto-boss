import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle";
const Category = () => {
  return (
    <div className="">
      <SectionTitle
        header={"ORDER ONLINE"}
        headerTitle={"---From 11:00am to 10:00pm---"}
      />

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        centeredSlides={false}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Time between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Keeps autoplay active even after user interactions
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/slide1.jpg" alt="" />
          <h1 className="text-4xl text-center text-white -mt-16 uppercase">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide2.jpg" alt="" />
          <h1 className="text-4xl text-center text-white -mt-16 uppercase">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide3.jpg" alt="" />
          <h1 className="text-4xl text-center text-white -mt-16 uppercase">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide4.jpg" alt="" />
          <h1 className="text-4xl text-center text-white -mt-16 uppercase">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide5.jpg" alt="" />
          <h1 className="text-4xl text-center text-white -mt-16 uppercase">
            Soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide4.jpg" alt="" />
          <h1 className="text-4xl text-center text-white -mt-16 uppercase">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide5.jpg" alt="" />
          <h1 className="text-4xl text-center text-white -mt-16 uppercase">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide4.jpg" alt="" />
          <h1 className="text-4xl text-center text-white -mt-16 uppercase">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide5.jpg" alt="" />
          <h1 className="text-4xl text-center text-white -mt-16 uppercase">
            Soup
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
