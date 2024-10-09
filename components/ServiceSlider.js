//import swiper component
import { Swiper, SwiperSlide } from "swiper/react";

// swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "When you care enough to send the very best Choose me",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Unleash the Power of Eye-Catching Design - With Us.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: " Development:  Innovation for a Better Tomorrow ",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "When You Need it in Writing, I’m The Guy For You",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Search engine success is just a click away From You.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, keyIndex) => {
        return (
          <SwiperSlide key={keyIndex}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div>{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>

              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
