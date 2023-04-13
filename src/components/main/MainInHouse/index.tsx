import React, { useState } from 'react'
import tinkleland from 'assets/images/main/main_tinkleland.png'
import rundit from 'assets/images/main/main_rundit.png'
import ItemCard from './ItemCard'
import CustomLink from './CustomLink'
import { Link } from 'gatsby'
import clsx from 'clsx'
import './index.scss'

const MainInHouse = () => {
  const [activeCard, setActiveCard] = useState([true, false])

  const firstCardEnter = () => {
    if (activeCard[0] === false) {
      setActiveCard([true, false])
    }
  }

  const secondCardEnter = () => {
    if (activeCard[1] === false) {
      setActiveCard([false, true])
    }
  }

  return (
    <section className="flex flex-col gap-30 sm:gap-40 lg:gap-50 mt-100 sm:mt-140 lg:mt-180">
      <div className="flex flex-col gap-5 lg:gap-10 pl-30 sm:pl-60 md:pl-100 xxl:pl-150">
        <h4 className="font-bold text-28 sm:text-45 lg:text-55 text-c-black-300">
          자체 브랜드
        </h4>
        <p className="text-18 sm:text-24 lg:text-28 text-c-black-300">
          텔로스의 브랜드를 소개합니다.
        </p>
      </div>

      <article className="flex flex-col-reverse h-full sm:flex-row ">
        <ul className="sm:z-10 flex flex-col justify-center sm:w-[60%] md:w-[80%] sm:gap-20 lg:gap-40 max-w-804 bg-[#FBFBFB]">
          <li className="min-h-[30%]" onMouseEnter={firstCardEnter}>
            <CustomLink
              isCardActive={activeCard[0]}
              linkPath="/tinkle-land"
              cardName="팅클랜드"
            >
              팅클랜드는 반려동물과 사람간의 <br />
              공존, 소통, 이해를 바탕으로 만들어진 브랜드입니다.
            </CustomLink>
          </li>
          <li className="min-h-[30%]" onMouseEnter={secondCardEnter}>
            <CustomLink
              isCardActive={activeCard[1]}
              linkPath="/rundit"
              cardName="런딧"
            >
              런딧은 고객님들의 불편사항을 반영하여 <br />
              만든 기능성 의류 브랜드입니다.
            </CustomLink>
          </li>
        </ul>
        <div className="relative w-full h-full max-w-1116">
          <img
            className={clsx(
              activeCard[0] ? 'fade-in' : 'opacity-0',
              'object-cover w-full h-full',
            )}
            src={tinkleland}
            alt="(주)텔로스 팅클랜드"
          />
          <img
            className={clsx(
              activeCard[1] ? 'fade-in' : 'opacity-0',
              'object-cover w-full h-full absolute top-0 right-0 bottom-0 left-0',
            )}
            src={rundit}
            alt="(주)텔로스 런딧"
          />
        </div>
      </article>
    </section>
  )
}

export default MainInHouse
