// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Tanveer Atta",
    message:
      "Exceptional web development service offering sleek designs, seamless functionality, responsive customer support recommended for businesses.",
  },
  {
    image: "/avatar.png",
    name: "Junaid Khan",
    message:
      "Outstanding web development service; recommended for businesses seeking sleek designs and seamless functionality.",
  },
  {
    image: "/t-avt-3.png",
    name: "Samran sohail",
    message:
      "Outstanding web development service; recommended for businesses seeking top-tier online presence.",
  },
  {
    image: "/t-avt-1.png",
    name: "Saqib Ali",
    message:
      "Outstanding web development service; recommended for businesses seeking top-tier online presence.",
  },
];

//import swiper component
import { Swiper, SwiperSlide } from "swiper/react";

// swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
// icon
import { FaQuoteLeft } from "react-icons/fa";

import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-72 md-h-[400px]"
    >
      {testimonialData.map((person, keyIndex) => {
        return (
          <SwiperSlide key={keyIndex}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar name & position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mx-auto ">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* postion */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quotes and message */}
              <div className="flex md:flex-row flex-col gap-3 items-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icom */}
                <div>
                  {/* message */}
                  <div className="xl:text-lg text-center md:text-left">
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
