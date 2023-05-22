import React, { useState } from 'react'
import cheeseInfo from 'assets/images/inhouse/tinkleland/tinkle_cheese_info.png'
import cheeseInfoMobile from 'assets/images/inhouse/tinkleland/tinkle_cheese_info_mobile.png'
import cheeseNavSelect from 'assets/images/inhouse/tinkleland/tinkle_nav_cheese_select.png'
import cookieNav from 'assets/images/inhouse/tinkleland/tinkle_nav_cookie.png'
import clsx from 'clsx'

const TinkleMascot = () => {
  const [currentNav, setCurrentNav] = useState('cheese')

  return (
    <section className="relative bg-white">
      <div>
        <img
          src={cheeseInfo}
          alt="팅클랜드 치즈 소개"
          className="hidden object-cover w-full sm:h-300 md:h-350 lg:h-500 sm:block"
        />
        <img
          src={cheeseInfoMobile}
          alt="팅클랜드 치즈 소개"
          className="block sm:hidden"
        />
      </div>
      <div className="w-full absolute top-[65%] sm:top-[50%] translate-y-[-50%]">
        <ul className="w-[35%] sm:w-[25%] max-w-320 flex flex-col gap-20 under:rounded-[0_15px_15px_0] under:h-110 under:md:h-140 under:lg:h-200 under:pt-10 under:flex-center under:flex-col under:sm:gap-5 under:cursor-pointer">
          <li
            className={clsx(
              currentNav === 'cookie'
                ? 'bg-[#7C4A2C] under:text-white w-full'
                : 'bg-[#D6C0A6] under:text-[#EBDAC6] w-[70%]',
              'transition-all duration-500',
            )}
            onClick={() => setCurrentNav('cookie')}
          >
            <img
              src={cookieNav}
              alt="쿠키"
              className="w-70 md:w-80 lg:w-auto"
            />
            <p className="font-bold md:text-18 lg:text-20">쿠키</p>
          </li>
          <li
            className={clsx(
              currentNav === 'cheese'
                ? 'bg-[#7C4A2C] under:text-white w-full'
                : 'bg-[#D6C0A6] under:text-[#EBDAC6] w-[70%]',
              'transition-all duration-500',
            )}
            onClick={() => setCurrentNav('cheese')}
          >
            <img
              src={cheeseNavSelect}
              alt="치즈"
              className="w-70 md:w-80 lg:w-auto"
            />
            <p className="font-bold text-white md:text-18 lg:text-20">치즈</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TinkleMascot
