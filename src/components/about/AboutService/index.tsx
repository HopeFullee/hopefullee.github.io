import React, { useState } from 'react'
import {
  ServiceIcon01,
  ServiceIcon02,
  ServiceIcon03,
  ServiceIcon04,
  ServiceIcon05,
  ServiceIcon06,
  ServiceIcon07,
  ServiceIcon08,
  ServiceHover01,
  ServiceHover02,
  ServiceHover03,
  ServiceHover04,
  ServiceHover05,
  ServiceHover06,
  ServiceHover07,
  ServiceHover08,
} from 'components/shared/Icons'

const SERVICE_INFO = [
  {
    image: <ServiceIcon01 />,
    imageHover: <ServiceHover01 />,
    title: '미디어커머스 마케팅',
    content:
      '자체 브랜드를 보유한 기업으로서 아이디어, 매체 이해력, 트렌드 분석, 노하우 등을 접목시킨 최상의 미디어 커머스 솔루션을 제공합니다.',
  },
  {
    image: <ServiceIcon02 />,
    imageHover: <ServiceHover02 />,
    title: '데이터 분석',
    content:
      '광고 대상의 데이터를 토대로 가장 적합한 방식의 마케팅 솔루션을 제공하고 결과를 분석해드립니다.',
  },
  {
    image: <ServiceIcon03 />,
    imageHover: <ServiceHover03 />,
    title: '정부지원 사업',
    content:
      '정부 지원사업과 연계하여 새로운 시작을 여는 기업들의 성장을 함께 이끌어 나갑니다.',
  },
  {
    image: <ServiceIcon04 />,
    imageHover: <ServiceHover04 />,
    title: '브랜드 마케팅',
    content:
      '브랜드 인지도 상승을 위한 커뮤니케이션 전략 기획 및 실행 방안을 제시합니다.',
  },
  {
    image: <ServiceIcon05 />,
    imageHover: <ServiceHover05 />,
    title: '패키지 디자인',
    content:
      '제품을 담는 용기나 포장지를 보존성, 편리성, 판촉성을 고려한 디자인으로 고객에게 제공해드립니다.',
  },
  {
    image: <ServiceIcon06 />,
    imageHover: <ServiceHover06 />,
    title: '편집 디자인',
    content:
      '주로 책자 형식의 인쇄물을 시각적으로 구성한 디자인을 고객에게 제공 해드립니다.',
  },
  {
    image: <ServiceIcon07 />,
    imageHover: <ServiceHover07 />,
    title: '브랜드 디자인',
    content:
      '가치있는 브랜드를 위한 비주얼 컨셉을 기획하고 브랜드가 추구하는 아이덴티티를 시각적으로 표현합니다.',
  },
  {
    image: <ServiceIcon08 />,
    imageHover: <ServiceHover08 />,
    title: '웹 디자인',
    content:
      '웹 페이지에 맞게 사용자의 접근성, 가독성, 편의성을 고려한 디자인을 제공합니다.',
  },
]

const AboutService = () => {
  const [hoverIdx, setHoverIdx] = useState<number | null>()

  return (
    <section className="overflow-x-hidden pb-150 sm:pb-200 lg:pb-250 mt-100 sm:mt-150 lg:mt-200 px-30">
      <div className="relative font-bold select-none h-100 sm:h-200 lg:h-300">
        <p className="w-full text-center absolute z-10 text-28 sm:text-40 lg:text-50 top-[55%] translate-y-[-50%]">
          우리가 제공하는
        </p>
        <p className="absolute text-100 sm:text-[160px] lg:text-[200px] text-[#F4F4F4] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tracking-tight">
          Service
        </p>
      </div>
      <div className="flex flex-wrap justify-center mx-auto gap-30 sm:gap-40 mt-50 max-w-1600">
        {SERVICE_INFO.map(({ image, imageHover, title, content }, idx) => {
          return (
            <article
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              key={`service` + idx}
              className="w-full flex flex-col items-center gap-20 px-30 py-40 sm:py-60 text-center rounded-xl shadow-[1px_1px_10px_#00000020] max-w-370 break-keep hover:bg-c-orange-300 under:hover:text-white transition-all duration-200"
            >
              <div className="under:h-55 under:w-55 sm:under:w-65 sm:under:h-65">
                {hoverIdx === idx ? imageHover : image}
              </div>
              <h6 className="font-semibold text-24 sm:text-32">{title}</h6>
              <p className="text-16 sm:text-22 max-w-320 text-c-gray-400">
                {content}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AboutService
