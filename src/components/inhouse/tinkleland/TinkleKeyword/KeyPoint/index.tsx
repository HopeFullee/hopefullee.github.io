import React, { useState, Fragment } from 'react'
import { KeyPointType } from '..'
import './index.scss'
import clsx from 'clsx'

type KeyPointProps = {
  info: KeyPointType[]
}

const KeyPoint = ({ info }: KeyPointProps) => {
  const [hoverState, setHoverState] = useState<number | undefined>()

  const handleItemHover = (idx: number) => {
    setHoverState(idx)
  }

  return (
    <article className="bg-[#F7F7F7]">
      <ul className="flex-col flex-center md:flex-row">
        {info.map(({ title, content, background }, idx) => {
          return (
            <Fragment key={title}>
              <li className="relative flex-col w-full px-10 md:w-640 all:text-c-gray-400 flex-center h-275 sm:h-375 md:h-450">
                <div className="w-[70%] sm:w-[60%] md:w-[80%] lg:w-[70%]">
                  <div className="flex gap-5 text-14 lg:text-15">
                    <p>Brand Key Point</p>
                    <span className="mt-[-4px]">{idx + 1}</span>
                  </div>
                  <h6 className="!text-c-black-300 text-32 sm:text-40 lg:text-50 font-semibold mt-5">
                    {title}
                  </h6>
                  <p className="font-medium leading-relaxed mt-30 sm:mt-35 sm:text-18 lg:text-20 max-w-330 break-keep">
                    {content}
                  </p>
                </div>

                {/* 하단 영역 호버 시 노출 */}
                <div
                  className={`${background} absolute opacity-0 hover:opacity-100 all:text-white w-full px-10 transition-all duration-300 flex-center h-275 sm:h-375 md:h-450 bg-center bg-cover bg-no-repeat`}
                >
                  <div className="w-[70%] sm:w-[60%] md:w-[80%] lg:w-[70%]">
                    <div className="flex gap-5 text-14 sm:text-15">
                      <p>Brand Key Point</p>
                      <span className="mt-[-4px]">{idx + 1}</span>
                    </div>
                    <h6 className="mt-5 font-semibold text-32 sm:text-40 lg:text-50">
                      {title}
                    </h6>
                    <p className="font-medium leading-relaxed mt-30 sm:mt-35 sm:text-18 lg:text-20 max-w-330 break-keep">
                      {content}
                    </p>
                  </div>
                </div>
              </li>

              {idx < 2 && (
                <li className="w-[80%] md:w-1 h-1 bg-c-gray-300 md:h-320"></li>
              )}
            </Fragment>
          )
        })}
      </ul>
    </article>
  )
}

export default KeyPoint
