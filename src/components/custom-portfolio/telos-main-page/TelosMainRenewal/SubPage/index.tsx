import React from 'react'
import subPage01 from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_renewal_sub_01.png'
import subPage02 from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_renewal_sub_02.png'
import subPage03 from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_renewal_sub_03.png'
import subPage04 from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_renewal_sub_04.png'

const SubPage = () => {
  return (
    <article className="flex flex-col gap-30 sm:gap-60 lg:gap-100">
      <div className="mx-auto max-w-1350 px-30">
        <p className="font-bold text-24 sm:text-35 lg:text-45 indent-20">
          SUB PAGE
        </p>
        <ul className="flex flex-col gap-10 md:gap-0 md:flex-row">
          <li>
            <img
              src={subPage01}
              alt="텔로스 홈페이지 프리뷰 이미지"
              className="max-h-600 sm:max-h-710 md:max-h-none"
            />
          </li>
          <li>
            <img
              src={subPage02}
              alt="텔로스 홈페이지 프리뷰 이미지"
              className="max-h-600 sm:max-h-710 md:max-h-none"
            />
          </li>
          <li>
            <img
              src={subPage03}
              alt="텔로스 홈페이지 프리뷰 이미지"
              className="max-h-600 sm:max-h-710 md:max-h-none"
            />
          </li>
        </ul>
      </div>
      <div className="mx-auto">
        <img
          src={subPage04}
          alt="텔로스 홈페이지 프리뷰 이미지"
          className="object-cover h-600 sm:h-900 lg:h-1000"
        />
      </div>
    </article>
  )
}

export default SubPage
