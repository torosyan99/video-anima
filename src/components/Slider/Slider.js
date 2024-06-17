import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem";
import gsap from "gsap";

import "swiper/css";
import "./slider.css";

function Slider({ refVideo = null }) {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    setVideo(refVideo.current);
  });
  return (
    <div className="slider">
      <Swiper
        className="slider__swiper"
        onSlideChange={(e) => {
            console.log(video)
          gsap.to(video, {
            duration:1,
            currentTime: (video.duration / e.slides.length) * e.realIndex,
            ease: "power2.out",
          });
        }}
      >
        <SwiperSlide>
          <SliderItem
            title={"Slider 1"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, veniam."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            title={"Slider 2"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, veniam."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            title={"Slider 3"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, veniam."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
