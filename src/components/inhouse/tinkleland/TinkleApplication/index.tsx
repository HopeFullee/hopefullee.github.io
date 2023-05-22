import React from 'react'
import ApplicationBg from 'assets/images/inhouse/tinkleland/tinkle_application_design.png'
import ApplicationSlider from './ApplicationSlider'

const TinkleApplication = () => {
  return (
    <section className="flex flex-col bg-white gap-60 pt-100 sm:pt-150 lg:pt-200 lg:gap-120">
      <article className="flex flex-col w-full gap-40 mx-auto max-w-1600 lg:gap-80 px-30 lg:px-50">
        <h4 className="font-bold tracking-tighter leading-tight text-center break-keep text-50 sm:text-75 lg:text-[120px] text-c-gray-200 font-open-sans lg:text-left">
          APPLICATION{' '}
          <span className="inline-block text-c-gray-200 ">DESIGN</span>
        </h4>
        <div className="flex flex-col justify-between w-full gap-40 mx-auto lg:mx-0 lg:flex-row max-w-700 lg:max-w-none">
          <ul className="text-center sm:text-left sm:text-18 lg:text-20 under:text-[#616161] break-keep lg:max-w-450 leading-relaxed sm:leading-loose flex flex-col gap-30">
            <li className="font-bold text-22 sm:text-26 lg:text-35 !text-c-black-300">
              반려견 수제 간식
            </li>
            <li>
              핵심 가치를 실현하기 위한 팅클랜드의 첫 번째 브랜드 상품 반려견
              수제 간식 제품입니다.
            </li>
            <li>
              아이덴티티를 담은 우수한 제품성과 더불어서 육안으로 제품의 질과
              상태를 쉽게 확인이 가능한 팅클랜드 반려견 수제 간식 패키지
              디자인입니다.
            </li>
          </ul>
          <div>
            <img
              src={ApplicationBg}
              alt="팅클랜드"
              className="object-cover min-h-200 lg:h-420"
            />
          </div>
        </div>
      </article>

      <ApplicationSlider />
    </section>
  )
}

export default TinkleApplication
