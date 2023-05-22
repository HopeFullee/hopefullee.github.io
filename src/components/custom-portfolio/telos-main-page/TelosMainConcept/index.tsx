import React from 'react'
import ConceptImage from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_concept.png'
import ConceptImageMobile from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_concept_mobile.png'

const TelosMainConcept = () => {
  return (
    <section className="bg-[#F9F9F9] pt-75 sm:pt-100 overflow-hidden">
      <article className="flex flex-col items-start justify-between mx-auto xxl:items-center max-w-600 md:max-w-800 lg:max-w-900 xxl:max-w-1500 xxl:flex-row px-30">
        <div>
          <h6 className="font-extrabold text-24 sm:text-35 lg:text-45 break-keep">
            브랜드 컨셉 정립
          </h6>
          <p className="text-[#9B9B9B] sm:text-17 lg:text-18 mt-15 break-keep">
            CI 리뉴얼을 위한 (주)텔로스의 브랜드 자산을 바탕으로 컨셉을 정립한
            후,
            <br className="hidden sm:block" />
            키워드 도출과 디자인 가이드의 프로세스를 설정합니다.
          </p>
        </div>
        <p className="tracking-tight text-[#F1F1F1] font-extrabold indent-[-5px] sm:indent-[-15px] text-65 sm:text-[120px] md:text-[140px] lg:text-[180px]">
          CONCEPT
        </p>
      </article>
      <article>
        <img
          src={ConceptImage}
          alt="텔로스 메인 홈페이지 컨셉"
          className="hidden object-cover mx-auto min-h-[1200px] lg:block"
        />
        <img
          src={ConceptImageMobile}
          alt="텔로스 메인 홈페이지 컨셉"
          className="block object-cover mx-auto sm:h-1450 md:h-[2000px] lg:hidden"
        />
      </article>
    </section>
  )
}

export default TelosMainConcept
