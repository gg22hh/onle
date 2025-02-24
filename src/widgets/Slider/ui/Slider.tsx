import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiperAnimation } from "../../../shared/lib/hooks/useSwiperAnimation";
import s from "../Slider.module.scss";
import { ItemType } from "../../../shared/types";
import { items } from "../../../shared/config/items";

interface SliderProps {
  item: ItemType;
}

const Slider: React.FC<SliderProps> = ({ item }) => {
  const [currentItem, setCurrentItem] = useState<ItemType>(items[0]);
  const swiperRef = useRef(null);
  useSwiperAnimation(swiperRef, item, setCurrentItem);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={90}
      slidesPerView={3}
      navigation
      className={s.swiper}
      ref={swiperRef}
      style={{ opacity: 0 }}
    >
      {currentItem?.events.map((event) => (
        <SwiperSlide key={event.id}>
          <div className={s.slider}>
            <h2>{event.year}</h2>
            <div>{event.description}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;