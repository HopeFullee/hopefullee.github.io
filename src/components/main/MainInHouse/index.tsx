import React from 'react'
import rundit from 'assets/images/main/main_rundit.png'
import tinkleland from 'assets/images/main/main_tinkleland.png'
import clsx from 'clsx'
import { useState } from 'react'
import CustomLink from './CustomLink'
import './index.scss'

const content = [
  {
    linkPath: '/tinkle-land',
    cardName: '팅클랜드',
    body: (
      <>
        팅클랜드는 반려동물과 사람간의 <br />
        공존, 소통, 이해를 바탕으로 만들어진 브랜드입니다.
      </>
    ),
    imgSrc: tinkleland,
  },
  {
    linkPath: '/rundit',
    cardName: '런딧',
    body: (
      <>
        런딧은 고객님들의 불편사항을 반영하여 <br />
        만든 기능성 의류 브랜드입니다.
      </>
    ),
    imgSrc: rundit,
  },
]

const MainInHouse = () => {
  const [activeCardIdx, setActiveCardIdx] = useState(0)

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
          {content.map(({ body, ...rest }, idx) => (
            <li key={idx} onMouseEnter={() => setActiveCardIdx(idx)}>
              <CustomLink isCardActive={idx === activeCardIdx} {...rest}>
                {body}
              </CustomLink>
            </li>
          ))}
        </ul>
        <div className="relative w-full h-full max-w-1116">
          {content.map(({ imgSrc }, idx) => (
            <img
              key={imgSrc}
              className={clsx(
                'object-cover w-full h-full',
                idx === activeCardIdx ? 'fade-in' : 'opacity-0',
                !idx && 'absolute top-0 right-0 bottom-0 left-0',
              )}
              src={imgSrc}
              alt="(주)텔로스 팅클랜드"
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default MainInHouse
