import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mb-10">
      <SectionTitle
        header={"TESTIMONIALS"}
        headerTitle={"---What Our Clients Say---"}
      />
      <>
        <Swiper
          autoplay={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide className="text-center space-y-5" key={review._id}>
              <div className="flex  justify-center">
                <Rating style={{ maxWidth: 180 }} value={review.rating} />
              </div>
              <p className="text-xl mx-10"> {review.details}</p>
              <h2 className="text-2xl text-yellow-500"> {review.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <div></div>
    </section>
  );
};

export default Testimonial;
