import React from 'react'
import appImage01 from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_application_item_01.png'
import appImage02 from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_application_item_02.png'
import appImage03 from 'assets/images/portfolio/custom-portfolio/telos_mainpage/telos_mainpage_application_item_03.png'

const TelosMainApplication = () => {
  return (
    <section className="relative bg-[#FBEADC] pt-30 sm:pt-50 pb-100 sm:pb-150 lg:pb-200 overflow-hidden xxxl:overflow-visible">
      <h4 className="w-full overflow-hidden tracking-tight text-center text-[#f7e0ce] font-extrabold indent-[-5px] text-65 sm:text-[120px] md:text-[140px] lg:text-[180px]">
        APPLICATION
      </h4>
      <article className="flex items-end justify-center mx-auto tracking-tighter lg:justify-between lg:items-center h-400 sm:h-550 md:h-640 lg:h-250 max-w-450 sm:max-w-1200 xxxl:max-w-1300 sm:px-50 px-30">
        <div>
          <h6 className="font-bold text-c-orange-300 text-24 sm:text-35 lg:text-45">
            사원증
          </h6>
          <p className="text-[#9D6F51]  sm:text-18 lg:text-20 break-keep">
            독특하고 재치있는 텔로스만의 정체성을 그라데이션과 패턴을{' '}
            <br className="hidden sm:block" />
            적용함으로 떠오르는 태양을 상징하여 디자인에 적용시켰습니다.
          </p>
        </div>
        <img
          src={appImage01}
          alt="텔로스 사원증"
          className=" absolute top-50 sm:top-100 lg:top-30 xxxl:top-[-30px] right-[-50px] sm:right-0 lg:right-[-150px] xxxl:right-0 h-350 sm:h-550 md:h-650 xxxl:h-auto"
        />
      </article>
      <article className="flex flex-col-reverse items-center justify-center mx-auto tracking-tighter gap-25 sm:gap-40 lg:justify-between lg:flex-row-reverse h-600 sm:h-900 md:h-1000 lg:h-800 max-w-450 sm:max-w-1200 xxxl:max-w-1300 sm:px-50 px-30 lg:gap-0">
        <div>
          <h6 className="font-bold text-c-orange-300 text-24 sm:text-35 lg:text-45">
            대·소봉투
          </h6>
          <p className="text-[#9D6F51] sm:text-18 lg:text-20 break-keep">
            텔로스만이 가지고 있는 유일무이한 정체성과 키워드를 서식류에{' '}
            <br className="hidden sm:block" />
            패턴으로 일관성 있게 독특하고 재치있는 디자인을 적용시켰습니다.
          </p>
        </div>
        <img
          src={appImage02}
          alt="텔로스 대,소봉투"
          className="lg:ml-[-120px] h-300 sm:h-450 md:h-500 xxxl:h-auto lg:mt-50"
        />
      </article>
      <article className="flex flex-col-reverse items-center gap-20 mx-auto tracking-tighter sm:gap-30 lg:flex-row lg:justify-between max-w-450 sm:max-w-1200 xxxl:max-w-1300 sm:px-50 px-30 lg:gap-0">
        <div>
          <h6 className="font-bold text-c-orange-300 text-24 sm:text-35 lg:text-45">
            명함
          </h6>
          <p className="text-[#9D6F51] sm:text-18 lg:text-20 break-keep">
            투명 재질의 장점을 살린 이 디자인은 텔로스의 일원만이{' '}
            <br className="hidden sm:block" />
            누릴 수 있는 프라이빗한 디자인을 커스텀하여 적용하 수 있습니다.
          </p>
        </div>
        <img
          src={appImage03}
          alt="텔로스 명함"
          className="lg:mr-[-120px] h-230 sm:h-330 md:h-380 xxxl:h-auto"
        />
      </article>
    </section>
  )
}

export default TelosMainApplication
