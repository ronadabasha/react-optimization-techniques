import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { slides } from "../../data/slider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <div className="z-10 relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="h-screen bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="relative max-w-6xl h-screen mx-auto">
                  <div className="absolute bg-[#00000094] text-white max-w-full mx-6 md:mx-0 md:max-w-[500px] p-8 left-0 bottom-6 md:bottom-auto md:top-1/2 -mt-[22px]">
                    <h1 className="text-xl font-urbanist font-bold mb-8">
                      {slide.title}
                    </h1>
                    <hr className="border-t-2 border-[#18776A] w-[50px] mb-6" />
                    <p className="font-urbanist font-medium">{slide.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
