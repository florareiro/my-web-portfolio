import React from "react";
import { useAppContext } from "../../hooks/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { InView } from "react-intersection-observer";

import Card from "../Card";
const Services = () => {
  const { language, data } = useAppContext();
  const { services } = data;
  return (
    <section
      className="container flex flex-col gap-y-6 md:gap-y-14"
      id="services"
    >
      <InView>
        {({ inView, ref }) => (
          <h1
            ref={ref}
            className={`${
              inView ? "animate-left" : ""
            } text-center font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-8xl `}
          >
            {services.text[language]}
          </h1>
        )}
      </InView>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
      >
        {services.services.map((service, index) => (
          <SwiperSlide key={index}>
            <Card text={service[language]} img={service.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
