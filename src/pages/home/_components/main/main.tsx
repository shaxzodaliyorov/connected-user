/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const MainCard = () => (
  <>
    <div className="flex flex-col justify-between p-[30px]">
      <img src="/images/light.png" alt="" className="w-[50px] h-[50px]" />
      <div>
        <h1 className="text_gradient text-[#1ec1ff] text-[44px] font-medium font-['Inter Display'] leading-[52.80px]">
          Company <br /> that support E-9 Visa
        </h1>
        <p className="text-[#0b0b0b] mt-2 pb-9 text-2xl font-normal font-['Inter Display'] leading-[33.60px]">
          We provide visa and accommodation.
        </p>
      </div>
    </div>
    <div className="pr-[37px]">
      <img className="" src="./images/main-image.svg" alt="" />
    </div>
  </>
);

export const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="w-full  ">
      <div className="w-full  container justify-between h-[400px] bg-white rounded-[15px]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 3000 }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide className="flex w-full justify-between">
            <MainCard />
          </SwiperSlide>
          <SwiperSlide className="flex w-full justify-between">
            <MainCard />
          </SwiperSlide>
          <SwiperSlide className="flex w-full justify-between">
            <MainCard />
          </SwiperSlide>
        </Swiper>
        <div className="flex px-[30px] gap-x-[6px] mt-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-6 h-1 cursor-pointer rounded-[15px] ${
                activeIndex === index ? "bg-[#0062ff]" : "bg-[#e7e7e7]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
