import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const AboutSlider = () => {
  return (
    <section className="w-full max-w-1920 lg:mt-200">
      <Swiper
        loop={true}
        slidesPerView={3}
        speed={2000}
        navigation={{
          nextEl: 'custom-next-class',
          prevEl: 'custom-prev-class',
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>11111111111</SwiperSlide>
        <SwiperSlide>22222222222</SwiperSlide>
        <SwiperSlide>33333333333</SwiperSlide>
        <SwiperSlide>44444444444</SwiperSlide>
        <SwiperSlide>55555555555</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default AboutSlider
