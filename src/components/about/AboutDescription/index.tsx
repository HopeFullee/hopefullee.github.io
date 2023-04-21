import React from 'react'

const AboutDescription = () => {
  return (
    <section className="flex flex-col items-center mx-auto gap-100 sm:gap-150 sm:mt-50 lg:mt-100 px-30 max-w-1600">
      <span className="w-2 h-70 sm:h-90 lg:h-110 bg-c-gray-300" />
      <article className="flex-col font-medium text-center gap-30 flex-center sm:gap-40 lg:gap-60 text-18 sm:text-24 lg:text-30 break-keep">
        <p className="sm:max-w-650 lg:max-w-800">
          텔로스 브랜딩팀은 언제나{' '}
          <strong className="text-c-orange-300">독특하고 새로운 생각</strong>
          으로 접근하여 브랜드를 전문화하고 세상과 연결시켜 삶의 문제를 해결해
          나갑니다.
        </p>
        <p className="sm:max-w-650 lg:max-w-560">
          더욱 더 <strong className="text-c-orange-300">차별화된 서비스</strong>
          를 만들 수 있도록 기본에 충실한 트렌드와 명확한 목표를 제시하여 기업과
          브랜드의 가치를 만들어 드립니다.
        </p>
      </article>
    </section>
  )
}

export default AboutDescription
