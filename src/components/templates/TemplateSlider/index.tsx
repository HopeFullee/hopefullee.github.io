import React, { useState, useRef, useEffect } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper'
import './index.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import clsx from 'clsx'
import prevBtn from 'assets/images/portfolio/template/template_slider_prev.png'
import nextBtn from 'assets/images/portfolio/template/template_slider_next.png'

type TemplateSliderProps = {
  sliderImages: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }[]
}

const TemplateSlider = ({ sliderImages }: TemplateSliderProps) => {
  const swiperRef = useRef<SwiperType>()

  const [isMobile, setIsMobile] = useState<boolean | undefined>()

  useEffect(() => {
    const getCurrentWidth = () => {
      const currentWidth = window.innerWidth

      if (currentWidth <= 900) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
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
  }, [])

  return (
    <section className="relative bg-white flex-center pb-50">
      {sliderImages.length >= 2 ? (
        <>
          {!isMobile && (
            <>
              <Swiper
                loop={true}
                centeredSlides={true}
                slidesPerView={1.45}
                spaceBetween={50}
                speed={800}
                modules={[Navigation]}
                onBeforeInit={swiper => (swiperRef.current = swiper)}
              >
                {sliderImages.map((images, idx) => {
                  return (
                    <SwiperSlide
                      key={'sliderItem' + idx}
                      className="!flex-center"
                    >
                      {({ isActive }) => (
                        <GatsbyImage
                          image={images.childImageSharp.gatsbyImageData}
                          alt="슬라이더 이미지"
                          className={clsx(
                            isActive ? 'opacity-100' : 'opacity-50',
                            'transition-all duration-500',
                          )}
                        />
                      )}
                    </SwiperSlide>
                  )
                })}
                {sliderImages.map((images, idx) => {
                  return (
                    <SwiperSlide
                      key={'sliderItem' + idx}
                      className="!flex-center"
                    >
                      {({ isActive }) => (
                        <GatsbyImage
                          image={images.childImageSharp.gatsbyImageData}
                          alt="슬라이더 이미지"
                          className={clsx(
                            isActive ? 'opacity-100' : 'opacity-50',
                            'transition-all duration-500',
                          )}
                        />
                      )}
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </>
          )}

          {isMobile && (
            <>
              <Swiper
                loop={true}
                centeredSlides={true}
                slidesPerView={1}
                pagination={{
                  el: '.template-pagination-container',
                  type: 'bullets',
                  bulletActiveClass: 'template-pagination-bullet-active',
                }}
                speed={800}
                modules={[Pagination]}
              >
                {sliderImages.map((images, idx) => {
                  return (
                    <SwiperSlide
                      key={'sliderItem' + idx}
                      className="!flex-center"
                    >
                      {({ isActive }) => (
                        <GatsbyImage
                          image={images.childImageSharp.gatsbyImageData}
                          alt="슬라이더 이미지"
                          className={clsx(
                            isActive ? 'opacity-100' : 'opacity-50',
                            'transition-all duration-500',
                          )}
                        />
                      )}
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </>
          )}
          <div className="hidden md:flex absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-1750 w-full justify-between under:outline-none">
            <button
              className="p-25"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={prevBtn} alt="<" className="h-60 lg:h-auto" />
            </button>
            <button
              className="p-25"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={nextBtn} alt=">" className="h-60 lg:h-auto" />
            </button>
          </div>
          <div className="template-pagination-container"></div>
        </>
      ) : (
        <>
          <GatsbyImage
            image={sliderImages[0].childImageSharp.gatsbyImageData}
            alt="슬라이더 이미지"
          />
        </>
      )}
    </section>
  )
}

export default TemplateSlider
