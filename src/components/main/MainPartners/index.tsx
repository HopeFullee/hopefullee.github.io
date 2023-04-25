import React from 'react'
import mainPartners from 'assets/images/main/main_partners.png'

const MainPartners = () => {
  return (
    <section className="flex flex-col mx-auto gap-30 sm:gap-40 lg:gap-50 mt-140 sm:mt-200 lg:mt-150 px-30 max-w-1600">
      <div className="flex flex-col gap-5 lg:gap-10">
        <h4 className="font-bold text-28 sm:text-45 lg:text-55 text-c-black-300">
          함께한 파트너스
        </h4>
        <p className="text-18 sm:text-24 lg:text-28 text-c-black-300">
          텔로스 브랜딩팀과 함께한 파트너스를 소개합니다.
        </p>
      </div>
      <article>
        <img src={mainPartners} alt="텔로스 파트너스 이미지" />
      </article>
    </section>
  )
}

export default MainPartners
