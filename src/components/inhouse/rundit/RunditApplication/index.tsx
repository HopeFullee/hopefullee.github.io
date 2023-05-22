import React from 'react'
import SideImages from './SideImages'
import bottomImage from 'assets/images/inhouse/rundit/rundit_application_item_04.png'

const RunditApplication = () => {
  return (
    <section className="flex-col bg-white flex-center py-100 sm:py-150 lg:py-200 gap-50 sm:gap-75">
      <div className="w-full px-30 lg:px-50 max-w-900 lg:max-w-none">
        <h4 className="font-bold leading-tight tracking-tighter text-center break-keep text-50 sm:text-75 lg:text-[120px] text-c-gray-200 font-open-sans lg:text-left">
          APPLICATION DESIGN
        </h4>
      </div>
      <article className="flex flex-col items-center justify-between w-full gap-50 md:items-stretch md:flex-row px-30 lg:px-50 max-w-950 lg:max-w-1650">
        <div className="relative">
          <div className="sticky flex flex-col leading-relaxed top-[15%] gap-20 lg:gap-30 max-w-440 md:max-w-350 lg:max-w-390 break-keep text-left">
            <h6 className="font-bold font-open-sans text-22 sm:text-26 lg:text-35">
              상세페이지 디자인
            </h6>
            <p className="sm:text-18 lg:text-20 text-[#616161]">
              “남들과는 다르게 나만의 길을 향해 달리자”라는 차별화된 모토로
              애슬레틱하고 세련된 키 비주얼을 설정하였습니다.
            </p>
            <p className="sm:text-18 lg:text-20 text-[#616161]">
              브랜드 자체 제작 제품을 선보이며, 키 비주얼을 토대로 상세페이지
              디자인을 진행하였습니다.
            </p>
          </div>
        </div>
        <SideImages />
      </article>
      <article className="max-w-1550">
        <img
          src={bottomImage}
          alt="팅클랜드 애견상식"
          className="object-cover min-h-300"
        />
      </article>
    </section>
  )
}

export default RunditApplication
