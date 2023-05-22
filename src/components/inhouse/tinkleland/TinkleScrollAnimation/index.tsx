import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import centerFloor from 'assets/images/inhouse/tinkleland/tinkle_center_floor.png'
import cheese from 'assets/images/inhouse/tinkleland/tinkle_cheese.png'
import rainbow from 'assets/images/inhouse/tinkleland/tinkle_rainbow.png'
import star from 'assets/images/inhouse/tinkleland/tinkle_star.png'
import cloud from 'assets/images/inhouse/tinkleland/tinkle_cloud.png'
import cookie from 'assets/images/inhouse/tinkleland/tinkle_cookie.png'
import './index.scss'

const TinkleScrollAnimation = () => {
  return (
    <section className="overflow-clip relative w-full h-[200vh] sm:h-[250vh] bg-[url('assets/images/inhouse/tinkleland/tinkle_center_bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="z-20 flex-center h-[100vh] lg:h-[110vh] sticky top-0 lg:mb-100">
        <p className="text-32 sm:text-45 md:text-50 lg:text-60 font-bold text-[#7C4A2C] text-center break-keep px-30">
          동물들이 함께 사는 세상, 팅클랜드!
        </p>
      </div>
      <Parallax
        className="absolute top-[10%] right-[-1%] transition-all duration-[2s] ease-out"
        speed={50}
      >
        <img
          src={rainbow}
          alt="무지개"
          className="c-animation-1 w-[65%] sm:w-[80%] lg:w-auto ml-auto"
        />
      </Parallax>
      <Parallax
        className="z-10 absolute top-[20%] left-[5%] transition-all duration-[2s] ease-out"
        speed={50}
        translateX={[30, 0]}
      >
        <img
          src={cheese}
          alt="치즈"
          className="c-animation-2 w-[50%] sm:w-[80%] lg:w-auto mr-auto"
        />
      </Parallax>
      <Parallax
        className="absolute top-[30%] left-[22%] transition-all duration-[2s] ease-out"
        speed={50}
      >
        <img
          src={star}
          alt="별"
          className="c-animation-1 w-[50%] sm:w-[80%] lg:w-auto"
        />
      </Parallax>
      <Parallax
        className="absolute top-[40%] left-0 transition-all duration-[2s] ease-out"
        speed={50}
      >
        <img
          src={cloud}
          alt="구름"
          className="c-animation-1 w-[50%] sm:w-[80%] lg:w-auto"
        />
      </Parallax>
      <Parallax
        className="absolute top-[42%] right-0 lg:right-[3%] transition-all duration-[2s] ease-out"
        speed={50}
      >
        <img
          src={cookie}
          alt="쿠키"
          className="c-animation-2 w-[50%] sm:w-[80%] lg:w-auto ml-auto"
        />
      </Parallax>
      <img
        className="absolute bottom-0"
        src={centerFloor}
        alt="팅클랜드 초원 이미지"
      />
    </section>
  )
}

export default TinkleScrollAnimation
