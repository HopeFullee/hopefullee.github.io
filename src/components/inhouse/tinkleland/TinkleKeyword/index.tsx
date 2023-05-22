import React from 'react'
import KeyPoint from './KeyPoint'

export type KeyPointType = {
  title: string
  content: string
  background: string
}

const KEY_POINT_INFO: KeyPointType[] = [
  {
    title: '동행',
    content:
      '반려동물을 더불어 살아가는 존재로 인식하며, 내 가족이라는 의식을 가집니다.',
    background:
      "bg-[url('assets/images/inhouse/tinkleland/tinkle_keypoint_01.png')]",
  },
  {
    title: '소통',
    content:
      '친근하고 가벼운 스토리를 활용하여 소비자와의 활발한 소통을 목표로 합니다.',
    background:
      "bg-[url('assets/images/inhouse/tinkleland/tinkle_keypoint_02.png')]",
  },
  {
    title: '공존',
    content:
      '반려동물과의 행복한 공존을 위하여 꾸준한 사회적 활동을 목표로 합니다.',
    background:
      "bg-[url('assets/images/inhouse/tinkleland/tinkle_keypoint_03.png')]",
  },
]

const TinkleKeyword = () => {
  return (
    <section className="bg-white">
      <article className="flex-col gap-20 text-center sm:gap-25 lg:gap-30 flex-center min-h-400 sm:min-h-550 lg:min-h-700 px-30 under:break-keep">
        <p className="font-medium text-c-gray-400 sm:text-18 lg:text-20">
          Brand Core Values
        </p>
        <h4 className="font-semibold leading-snug text-32 sm:text-40 lg:text-50 max-w-400 sm:max-w-500 lg:max-w-650">
          우리 아이와의 동행과 소통 그리고 공존에 초점을 맞춥니다.
        </h4>
      </article>
      <KeyPoint info={KEY_POINT_INFO} />
      <article className="flex-col gap-20 text-center sm:gap-25 lg:gap-30 flex-center min-h-500 sm:min-h-550 lg:min-h-700 px-30 under:break-keep">
        <h4 className="font-semibold text-22 sm:text-26 lg:text-30">
          브랜드 가치를 실현하기 위하여
          <br />
          세계관을 구축해 브랜드 경험을 제공합니다.
        </h4>
        <p className="leading-relaxed text-c-gray-400 sm:leading-loose sm:text-17 lg:text-18 max-w-500 sm:max-w-690 lg:max-w-730">
          팅클랜드 세계에서는 다양한 반려동물이 살고 있어요. 그중에서도 쿠키와
          치즈를 중심으로 만들어지는 여러가지 이야기들은 다양한 콘텐츠로 이어질
          수 있는 확장 및 지속 가능한 브랜드를 경험할 수 있고 브랜드 컨셉 및
          세계관 구축 등으로 기존 펫 관련 브랜드와는 차별화된 브랜드를 경험할 수
          있습니다.
        </p>
      </article>
    </section>
  )
}

export default TinkleKeyword
