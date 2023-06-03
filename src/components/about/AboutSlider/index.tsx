import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import sliderPrev from 'assets/images/about/about_slider_prev.png'
import sliderNext from 'assets/images/about/about_slider_next.png'
import sliderItem01 from 'assets/images/about/about_slider_item_01.png'
import sliderItem02 from 'assets/images/about/about_slider_item_02.png'
import sliderItem03 from 'assets/images/about/about_slider_item_03.png'
import sliderItem04 from 'assets/images/about/about_slider_item_04.png'
import clsx from 'clsx'
import './index.scss'

const ABOUT_SLIDER_INFO = [
  {
    image: sliderItem01,
    title: (
      <>
        창조를 바라는 고민에
        <br />
        혁신으로 응답하기 위해
      </>
    ),
    content: (
      <>
        우리는 브랜드를 만들어 가기 위해
        <br />
        멈추지않고 새로운 영역을 개쳑하며,
        <br />
        서로가 추구하는 브랜딩을 만들어
        <br />
        나아갈 길을 제시합니다.
      </>
    ),
  },
  {
    image: sliderItem02,
    title: <>늘 애정을 가지고</>,
    content: (
      <span className="block mt-25">
        늘 브랜드에 대한 고민과 애정으로
        <br />
        도출한 분석과 결과를 바탕으로
        <br /> 영감을 얻습니다.
      </span>
    ),
  },
  {
    image: sliderItem03,
    title: (
      <>
        누구의 예상도
        <br />
        뛰어넘는
      </>
    ),
    content: (
      <>
        누구의 예상도 뛰어넘을 수 있는 호기심으로
        <br />
        브랜드와 비즈니스에 활력을 불어넣고
        <br />
        끊임없이 탐구하여 브랜드만의 전략과
        <br />그 ‘차이’를 만들어냅니다.
      </>
    ),
  },
  {
    image: sliderItem04,
    title: (
      <>
        영원한 파트너로
        <br />
        지속 가능한 브랜드를
        <br />
        실현합니다.
      </>
    ),
    content: (
      <>
        본질에 벗어나 화려함을 쫓기보다,
        <br />
        기본과 트렌드에 충실하여
        <br />
        삶에서 기억되고 지속가능한
        <br />
        브랜드의 정체성을 실현합니다.
      </>
    ),
  },
]

const AboutSlider = () => {
  const swiperRef = useRef<SwiperType>()

  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const getCurrentWidth = () => {
      const currentWidth = window.innerWidth

      if (600 <= currentWidth) {
        setIsMobile(false)
      } else {
        setIsMobile(true)
      }
    }

    const debounceResize = (fn: Function, delay: number) => {
      let id: any
      return (...args: any) => {
        if (id) clearTimeout(id)
        id = setTimeout(() => {
          fn(...args)
        }, delay)
      }
    }

    window.addEventListener('resize', debounceResize(getCurrentWidth, 500))
    getCurrentWidth()
    return () => window.removeEventListener('resize', getCurrentWidth)
  }, [isMobile])

  return (
    <section className="relative mx-auto pb-30 pt-60 sm:py-100 w-full max-w-1920 mt-100 sm:mt-200 md:mt-250 lg:mt-300 bg-[#FBFBFB]">
      <Swiper
        loop={true}
        centeredSlides={true}
        pagination={{
          el: '.about-pagination-container',
          type: 'bullets',
          bulletActiveClass: 'about-pagination-bullet-active',
        }}
        speed={800}
        modules={[Navigation, Pagination]}
        onBeforeInit={swiper => (swiperRef.current = swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          },
        }}
      >
        {ABOUT_SLIDER_INFO.map(({ image, title, content }, idx) => {
          return (
            <SwiperSlide key={'sliderItem' + idx} className="!flex-center">
              {({ isPrev, isNext }) => (
                <div
                  className={clsx(
                    isPrev ? 'on-prev opacity-50 blur-[1px]' : '',
                    isNext ? 'on-next opacity-50 blur-[1px]' : '',
                    'relative flex-col text-center flex-center gap-35 transition-all duration-800',
                  )}
                >
                  <img
                    src={image}
                    alt="썸네일 이미지"
                    className="w-150 sm:w-auto"
                  />
                  <h6 className="font-extrabold text-c-orange-300 text-24 sm:text-34">
                    {title}
                  </h6>
                  <p className="font-medium text-16 sm:text-22">{content}</p>
                </div>
              )}
            </SwiperSlide>
          )
        })}
        {!isMobile &&
          ABOUT_SLIDER_INFO.map(({ image, title, content }, idx) => {
            return (
              <SwiperSlide key={'sliderItem' + idx} className="!flex-center">
                {({ isPrev, isNext }) => (
                  <div
                    className={clsx(
                      isPrev ? 'on-prev opacity-50 blur-[1px]' : '',
                      isNext ? 'on-next opacity-50 blur-[1px]' : '',
                      'relative flex-col text-center flex-center gap-35 transition-all duration-800',
                    )}
                  >
                    <img
                      src={image}
                      alt="썸네일 이미지"
                      className="w-150 sm:w-auto"
                    />
                    <h6 className="font-extrabold text-c-orange-300 text-24 sm:text-34">
                      {title}
                    </h6>
                    <p className="font-medium text-16 sm:text-22">{content}</p>
                  </div>
                )}
              </SwiperSlide>
            )
          })}
      </Swiper>
      <div className="hidden sm:flex absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-w-500 sm:max-w-600 w-full justify-between under:outline-none">
        <button className="p-25" onClick={() => swiperRef.current?.slidePrev()}>
          <img src={sliderPrev} alt="<" />
        </button>
        <button className="p-25" onClick={() => swiperRef.current?.slideNext()}>
          <img src={sliderNext} alt=">" />
        </button>
      </div>
      <div className="about-pagination-container"></div>
    </section>
  )
}

export default AboutSlider
