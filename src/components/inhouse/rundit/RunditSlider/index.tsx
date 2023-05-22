import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import './index.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const RunditSlider = () => {
  SwiperCore.use([Pagination])

  return (
    <section className="relative bg-[#0B0B0B] pt-130 pb-100 sm:py-150 lg:py-200">
      <div className="flex-col gap-30 flex-center sm:gap-60 lg:gap-90 px-30">
        <div>
          <span className="absolute left-30 sm:left-50 lg:left-150 top-[9%] sm:top-[10%] lg:top-[13%] text-14 sm:text-18 lg:text-20 text-[#4B4B4B] font-open-sans font-bold">
            BRAND SLOGAN
          </span>
          <h6 className="font-bold text-center text-white text-22 sm:text-32 lg:text-40">
            스포츠와 일상 모두,
            <br className="block sm:hidden" /> 편안함과 멋스러움으로
          </h6>
        </div>
        <span className="w-1 h-90 sm:h-140 lg:h-190 bg-[#FFF9F9]"></span>
      </div>

      <article className="relative bg-[url('assets/images/inhouse/rundit/rundit_slider_bg.png')] bg-no-repeat bg-cover lg:bg-auto bg-center">
        <Swiper
          className="text-center all:h-240 sm:all:h-290 md:all:h-350 lg:all:h-485 all:mx-auto break-keep"
          modules={[Pagination]}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            type: 'bullets',
            el: '.rundit-pagination-container',
            bulletActiveClass: 'rundit-pagination-bullet-active',
          }}
        >
          <SwiperSlide className="all:flex-center">
            <p className="font-bold text-white text-26 sm:text-36 md:text-45 lg:text-60 px-30">
              남들과는 다르게 나만의 길을 향해 달려가세요!
            </p>
          </SwiperSlide>
          <SwiperSlide className="all:flex-center ">
            <p className="font-bold text-white text-26 sm:text-36 md:text-45 lg:text-60 px-30">
              Run Differently, RUNDIT
            </p>
          </SwiperSlide>
          <SwiperSlide className="all:flex-center ">
            <p className="font-bold text-white text-26 sm:text-36 md:text-45 lg:text-60 px-30">
              Run on your own way!
            </p>
          </SwiperSlide>
        </Swiper>
        <div className="rundit-pagination-container"></div>
      </article>
    </section>
  )
}

export default RunditSlider
