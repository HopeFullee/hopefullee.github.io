import React from 'react'
import tinkleLogo from 'assets/images/inhouse/inhouse_tinkleland_logo.png'
import runditLogo from 'assets/images/inhouse/inhouse_rundit_logo.png'
import { Link } from 'gatsby'

const HouseBanner = () => {
  return (
    <section className="flex-col mx-auto flex-center pb-50 sm:pb-100 lg:pb-150 max-w-1920">
      <h2 className="font-bold font-open-sans text-32 sm:text-40 lg:text-45 h-175 sm:h-200 lg:h-280 flex-center">
        <span>자체</span>
        <span className="ml-10 text-c-orange-300">프로젝트</span>
      </h2>
      <div className="flex-col w-full flex-center md:flex-row">
        <article className="relative h-300 sm:h-500 md:h-600 lg:h-1000 w-full bg-[url('assets/images/inhouse/inhouse_tinkleland.png')] bg-center bg-cover bg-no-repeat">
          <Link to="/inhouse/tinkleland">
            <img
              src={tinkleLogo}
              alt="팅클랜드"
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-out h-140 sm:h-180 lg:h-220 hover:h-180 sm:hover:h-220 lg:hover:h-260"
            />
          </Link>
        </article>
        <article className="h-300 pb-40 md:p-0 sm:h-500 md:h-600 lg:h-1000 w-full bg-[url('assets/images/inhouse/inhouse_rundit.png')] bg-center bg-cover bg-no-repeat flex-center">
          <Link to="/inhouse/rundit">
            <img
              src={runditLogo}
              alt="런딧"
              className="transition-all duration-300 ease-out h-140 sm:h-180 lg:h-220 hover:h-180 sm:hover:h-220 lg:hover:h-260"
            />
          </Link>
        </article>
      </div>
    </section>
  )
}

export default HouseBanner
