import React from 'react'
import grayLogo from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_identity_gray_logo.png'
import orangeLogo from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_identity_orange_logo.png'

const TelosMainIdentity = () => {
  return (
    <section className="overflow-hidden bg-white px-30 py-70 sm:py-100 lg:py-200">
      <div className="flex flex-col mx-auto max-w-600 md:max-w-800 lg:max-w-900 xxl:max-w-1600 ">
        <article className="relative h-78 sm:h-143 md:h-168 lg:h-215">
          <h6 className="absolute bottom-0 font-extrabold text-24 sm:text-36 lg:text-45">
            기업 CI 및 로고
          </h6>
          <p className="tracking-tight text-[#f5f5f5] font-extrabold indent-[-5px] lg:indent-[-10px] text-65 sm:text-[120px] md:text-[140px] lg:text-[180px]">
            IDENTITY
          </p>
        </article>
        <article className="flex flex-col justify-between mt-60 gap-70 xxl:items-center xxl:flex-row sm:mt-80 lg:mt-120">
          <div className="flex flex-col gap-30">
            <h6 className="leading-snug tracking-tight text-22 sm:text-32 lg:text-42">
              <span className="font-bold text-c-orange-300">창조(변화)</span>를
              바라는 고민에
              <br className="" />
              <span className="font-bold text-c-orange-300">혁신</span>으로
              응답합니다.
            </h6>
            <p className="leading-relaxed tracking-tight sm:text-17 lg:text-18 text-[#9B9B9B] break-keep">
              다양한 도전을 두려워하지 않는 젊은 텔로스는 열정적이고 도전적이고{' '}
              <br className="hidden sm:block" />
              다양한 개성을 지닌 텔로스다움의 키워드를 가지고{' '}
              <br className="hidden sm:block" />
              혁신을 목표로 다양한 서비스를 제공하는 기업입니다.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start lg:justify-center sm:flex-row gap-30 md:gap-50">
            <img
              src={grayLogo}
              alt="텔로스 로고"
              className=" sm:max-w-none sm:h-140 md:h-180 lg:h-auto"
            />
            <img
              src={orangeLogo}
              alt="텔로스 로고"
              className=" sm:max-w-none sm:h-100 md:h-140 lg:h-auto"
            />
          </div>
        </article>
        <article className="flex flex-col justify-between mx-auto gap-60 sm:mx-0 xxl:flex-row mt-80 lg:mt-130 xxl:mt-200 sm:gap-70 lg:gap-80">
          <div className="flex flex-col gap-30 lg:gap-40">
            <p className="font-semibold font-open-sans text-22 lg:text-25">
              Color
            </p>
            <ul className="flex gap-30 md:gap-40">
              <li className="rounded-full w-54 md:w-64 h-54 md:h-64 bg-c-orange-300"></li>
              <li className="w-54 md:w-64 h-54 md:h-64 rounded-full bg-[#FF9E3D]"></li>
              <li className="w-54 md:w-64 h-54 md:h-64 rounded-full bg-[#FCD991]"></li>
            </ul>
          </div>
          <div className="flex flex-col w-full gap-30 lg:gap-40 max-w-850 lg:mr-150">
            <p className="font-semibold font-open-sans text-22 lg:text-25">
              Font
            </p>
            <div className="flex flex-col justify-between gap-30 md:gap-50 sm:flex-row">
              <ul className="w-full">
                <li className="font-open-sans text-18 md:text-20 lg:text-21">
                  Rabbid Highway Sign II
                </li>
                <li className="w-full h-2 mt-10 bg-c-gray-400 max-w-300 sm:max-w-340 lg:max-w-370"></li>
                <li className="tracking-snug text-20 md:text-22 lg:text-25 font-rabbid-highway-sign text-[#9B9B9B] mt-10">
                  ABCDEFGHIJKLMN
                  <br />
                  OPQRSTUVWXYZ
                </li>
              </ul>
              <ul className="w-full">
                <li className="font-open-sans text-18 md:text-20 lg:text-21">
                  Pretendard
                </li>
                <li className="w-full h-2 mt-10 bg-c-gray-400 max-w-300 sm:max-w-340 lg:max-w-370"></li>
                <li className="tracking-snug text-20 md:text-22 lg:text-25 text-[#9B9B9B] mt-10">
                  가나다라마바사아자차카타파하
                  <br />
                  1234567890~!@#$%^&*()_+=
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default TelosMainIdentity
