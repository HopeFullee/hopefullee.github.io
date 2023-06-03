import React from 'react'
import RenewalImage from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_renewal.png'
import SubPage from './SubPage'

const TelosMainRenewal = () => {
  return (
    <>
      <section className="bg-white px-30 py-50 sm:py-100 lg:py-150">
        <article className="flex flex-col mx-auto max-w-1100 xxl:max-w-1500 gap-50 sm:gap-75 lg:gap-100">
          <h4 className="w-full overflow-hidden tracking-tight text-center text-[#f5f5f5] font-extrabold indent-[-5px] text-60 sm:text-[100px] md:text-[120px] leading-tight">
            HOMEPAGE RENEWAL
          </h4>
          <div className="flex flex-col items-center justify-between lg:items-start lg:flex-row">
            <img
              src={RenewalImage}
              alt="텔로스 홈페이지 리뉴얼 샘플 이미지"
              className="max-h-500 lg:max-h-400 xxl:max-h-full"
            />
            <div className="mt-50">
              <h6 className="font-bold text-24 sm:text-35 lg:text-45">
                MAIN PAGE
              </h6>
              <div className="text-[#9B9B9B] sm:text-18 flex flex-col gap-20 mt-20 break-keep">
                <p>
                  새롭게 정립한 텔로스의 아이덴티티를 표현할 수 있는{' '}
                  <br className="hidden sm:block" />
                  홈페이지입니다. 텔로스의 계열사 소프트, 브랜딩의{' '}
                  <br className="hidden sm:block" />
                  정체성을 나타낼 수 있도록 페이지를 제작하였습니다.
                </p>
                <p>
                  사용자의 편의성을 고려하여 직관적이고 단순한{' '}
                  <br className="hidden sm:block" />
                  UI·UX 리뉴얼을 진행하였습니다.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="bg-[#FBFBFB] pb-100 sm:pb-150 lg:pb-200 pt-50 sm:pt-100 lg:pt-150">
        <SubPage />
      </section>
    </>
  )
}

export default TelosMainRenewal
