import React, { useState } from 'react'
import cheeseInfo from 'assets/images/inhouse/tinkleland/tinkle_cheese_info.png'
import cheeseInfoMobile from 'assets/images/inhouse/tinkleland/tinkle_cheese_info_mobile.png'
import cheeseActive from 'assets/images/inhouse/tinkleland/tinkle_cheese_active.png'
import cheeseInactive from 'assets/images/inhouse/tinkleland/tinkle_cheese_inactive.png'
import cookieInfo from 'assets/images/inhouse/tinkleland/tinkle_cookie_info.png'
import cookieInfoMobile from 'assets/images/inhouse/tinkleland/tinkle_cookie_info_mobile.png'
import cookieActive from 'assets/images/inhouse/tinkleland/tinkle_cookie_active.png'
import cookieInactive from 'assets/images/inhouse/tinkleland/tinkle_cookie_inactive.png'

const TinkleMascot = () => {
  const [currentNav, setCurrentNav] = useState('cookie')

  return (
    <section className="relative bg-white">
      <div>
        {currentNav === 'cheese' ? (
          <>
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
          </>
        ) : (
          currentNav === 'cookie' && (
            <>
              <img
                src={cookieInfo}
                alt="팅클랜드 치즈 소개"
                className="hidden object-cover w-full sm:h-300 md:h-350 lg:h-500 sm:block"
              />
              <img
                src={cookieInfoMobile}
                alt="팅클랜드 치즈 소개"
                className="block sm:hidden"
              />
            </>
          )
        )}
      </div>
      <div className="w-full absolute top-[30%] sm:top-[50%] translate-y-[-50%]">
        <ul className="under:cursor-pointer max-w-90 sm:max-w-120 md:max-w-140 lg:max-w-200">
          <li onClick={() => setCurrentNav('cheese')}>
            {currentNav === 'cheese' ? (
              <img src={cheeseActive} alt="쿠키" className="w-full" />
            ) : (
              <img
                src={cheeseInactive}
                alt="쿠키"
                className="w-[85%] lg:w-auto"
              />
            )}
          </li>
          <li onClick={() => setCurrentNav('cookie')}>
            {currentNav === 'cookie' ? (
              <img src={cookieActive} alt="쿠키" className="w-full" />
            ) : (
              <img
                src={cookieInactive}
                alt="쿠키"
                className="w-[85%] lg:w-auto"
              />
            )}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TinkleMascot
