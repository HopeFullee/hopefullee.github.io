import React from 'react'
import logoTypeA from 'assets/images/inhouse/rundit/rundit_logo_type_A.png'
import logoTypeB from 'assets/images/inhouse/rundit/rundit_logo_type_B.gif'

const RunditLogo = () => {
  return (
    <section className="relative bg-[url('assets/images/inhouse/rundit/rundit_brand_logo.png')] pt-130 pb-100 sm:py-150 lg:py-200 px-30 sm:px-50">
      <article className="flex-col ml-auto gap-60 flex-center lg:max-w-1550 lg:gap-80">
        <div>
          <span className="absolute left-30 sm:left-50 lg:left-150 top-[5%] sm:top-[10%] lg:top-[13%] text-14 sm:text-18 lg:text-20 text-white font-open-sans font-semibold">
            BRAND LOGO
          </span>
          <p className="font-light leading-relaxed text-left text-white text-16 sm:text-18 lg:text-20 break-keep ">
            RUNDIT의 비주얼 모티브는 “남들과는 다르게 나만의 길을 향해
            달리자”라는 모토에 도달하기 위한 ‘트랙의 형태’에서 출발하였습니다.
            <br className="hidden lg:block" /> 일상이나 스포츠 등에 도움이
            되고자 혁신적인 제품을 제공하는 도전적이고 다이나믹한 브랜드
            아이덴티티를 표현합니다.
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row gap-60 lg:gap-110">
          <li className="flex flex-col gap-20 sm:gap-30">
            <p className="pb-10 font-semibold text-white text-20 border-b-1 border-[#504F4F]">
              Type A
            </p>
            <div>
              <img src={logoTypeA} alt="런딧 로고 시안 A" />
            </div>
          </li>
          <li className="flex flex-col gap-20 sm:gap-30">
            <p className="pb-10 font-semibold text-white text-20 border-b-1 border-[#504F4F]">
              Type B
            </p>
            <div>
              <img src={logoTypeB} alt="런딧 로고 시안 A" />
            </div>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default RunditLogo
