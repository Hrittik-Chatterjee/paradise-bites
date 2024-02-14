import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import css
import "./Category.css";
// import photos
import cat1 from "../../../assets/category/slide1.jpg";
import cat2 from "../../../assets/category/slide2.jpg";
import cat3 from "../../../assets/category/slide3.jpg";
import cat4 from "../../../assets/category/slide4.jpg";
import cat5 from "../../../assets/category/slide5.jpg";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Category = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-6"
      >
        <SwiperSlide>
          <img src={cat1} />
          <h2 className="text-center text-4xl -mt-44 text-white">Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} />
          <h2 className="text-center text-4xl -mt-44 text-white">Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat3} />
          <h2 className="text-center text-4xl -mt-44 text-white">Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat4} />
          <h2 className="text-center text-4xl -mt-44 text-white">Dessert</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat5} />
          <h2 className="text-center text-4xl -mt-44 text-white">Salad</h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
