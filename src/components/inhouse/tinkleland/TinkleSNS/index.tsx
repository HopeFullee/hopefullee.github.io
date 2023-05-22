import React from 'react'
import SideImages from './SideImages'
import bottomImage from 'assets/images/inhouse/tinkleland/tinkle_SNS_item_05.png'

const TinkleSNS = () => {
  return (
    <section className="flex-col bg-white flex-center py-100 sm:py-150 lg:py-200 gap-50 sm:gap-75">
      <article className="flex flex-col items-center justify-between w-full gap-50 md:items-stretch md:flex-row px-30 lg:px-50 max-w-950 lg:max-w-1650">
        <div className="relative">
          <div className="sticky flex flex-col leading-relaxed top-[15%] gap-20 lg:gap-30 max-w-440 md:max-w-350 lg:max-w-390 break-keep text-left">
            <h6 className="font-bold font-open-sans text-22 sm:text-26 lg:text-35">
              SNS 콘텐츠
            </h6>
            <p className="sm:text-18 lg:text-20 text-[#616161]">
              팅클랜드의 브랜드 아이덴티티로 소비자의 마음과 시선을 사로잡는 웹
              SNS 콘텐츠입니다.
            </p>
            <p className="sm:text-18 lg:text-20 text-[#616161]">
              브랜드 런칭 이벤트 프로모션 페이지와 더불어 카드뉴스 그 외
              상세페이지 등의 웹 SNS 콘텐츠를 제작하여 브랜드의 핵심 가치를
              실현합니다.
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

export default TinkleSNS
