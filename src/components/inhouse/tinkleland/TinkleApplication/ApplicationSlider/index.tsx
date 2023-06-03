import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper'
import './index.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import clsx from 'clsx'

import sliderPrev from 'assets/images/inhouse/tinkleland/tinkle_slider_prev.png'
import sliderNext from 'assets/images/inhouse/tinkleland/tinkle_slider_next.png'
import sliderItem01 from 'assets/images/inhouse/tinkleland/tinkle_slider_item_01.png'
import sliderItem02 from 'assets/images/inhouse/tinkleland/tinkle_slider_item_02.png'
import sliderItem03 from 'assets/images/inhouse/tinkleland/tinkle_slider_item_03.png'
import sliderItem04 from 'assets/images/inhouse/tinkleland/tinkle_slider_item_04.png'
import sliderItem05 from 'assets/images/inhouse/tinkleland/tinkle_slider_item_05.png'
import sliderItem06 from 'assets/images/inhouse/tinkleland/tinkle_slider_item_06.png'
import sliderItem07 from 'assets/images/inhouse/tinkleland/tinkle_slider_item_07.png'
import sliderItem08 from 'assets/images/inhouse/tinkleland/tinkle_slider_item_08.png'

const SLIDER_ITEM = [
  sliderItem01,
  sliderItem02,
  sliderItem03,
  sliderItem04,
  sliderItem05,
  sliderItem06,
  sliderItem07,
  sliderItem08,
]

const ApplicationSlider = () => {
  const [sliderBg, setSliderBg] = useState('bg-item-01')
  const swiperRef = useRef<SwiperType>()

  return (
    <article className="relative sm:h-660 lg:h-960 flex-center">
      {SLIDER_ITEM.map((_, idx) => {
        return (
          <div
            key={`bg-overlay ${idx}`}
            className={clsx(
              !swiperRef.current?.realIndex
                ? 'opacity-100'
                : swiperRef.current?.realIndex === idx
                ? 'opacity-100'
                : 'opacity-0',
              `bg-overlay ${sliderBg}`,
            )}
          ></div>
        )
      })}
      <Swiper
        className="all:mx-auto"
        modules={[Navigation, Pagination]}
        loop={true}
        slidesPerView={1}
        speed={1000}
        pagination={{
          el: '.tinkle-pagination-container',
          type: 'bullets',
          bulletActiveClass: 'tinkle-pagination-bullet-active',
        }}
        onBeforeInit={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => {
          setSliderBg('bg-item-0' + (swiper.realIndex + 1))
        }}
      >
        {SLIDER_ITEM.map((image, idx) => {
          return (
            <SwiperSlide key={`product ${idx}`}>
              <img
                src={image}
                alt={`팅클랜드 제품 ${idx + 1}`}
                className="sm:w-490 lg:w-auto"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="hidden sm:flex absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:max-w-860 lg:max-w-1400 w-full justify-between under:outline-none">
        <button className="p-25" onClick={() => swiperRef.current?.slidePrev()}>
          <img src={sliderPrev} alt="<" className="sm:w-60 lg:w-auto" />
        </button>
        <button className="p-25" onClick={() => swiperRef.current?.slideNext()}>
          <img src={sliderNext} alt=">" className="sm:w-60 lg:w-auto" />
        </button>
      </div>
      <div className="tinkle-pagination-container"></div>
    </article>
  )
}

export default ApplicationSlider
