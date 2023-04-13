import React, { Fragment, useState } from 'react'
import clsx from 'clsx'

const ITEM_INFO = {
  creative: '창조를 바라는 고민에 혁신으로 응답하기 위해',
  thinking: '늘 고민하고 분석하며',
  outstand: '누구의 예상도 뛰어넘는',
  partners: '영원한 파트너로 지속 가능한 브랜드를 실현합니다.',
}

type TextListProps = {
  graphicToSet: Function
  selectedItem: String
}

const TextList = ({ graphicToSet, selectedItem }: TextListProps) => {
  const handleItemHover = (key: String) => {
    graphicToSet(key)
  }

  return (
    <ul className="flex flex-col justify-center w-full font-medium sm:gap-15 lg:gap-20 max-w-763 break-keep">
      {Object.entries(ITEM_INFO).map(([key, value], idx) => {
        return (
          <Fragment key={key}>
            <li
              className={clsx(
                selectedItem === key
                  ? 'under:!text-c-orange-300 text-c-black-300'
                  : 'text-c-gray-300',
                'py-15 sm:py-0 flex items-center gap-10 md:gap-15 cursor-default sm:text-18 md:text-20 lg:text-22 xl:text-26 xxxl:text-32',
              )}
              onMouseEnter={() => handleItemHover(key)}
            >
              <span className="!text-22 md:!text-24 lg:!text-26 xl:!text-30 xxxl:!text-35 !font-bold">
                {`0${idx + 1}`}
              </span>
              {value}
            </li>
            <li className="h-1 bg-[#808080]"></li>
          </Fragment>
        )
      })}
    </ul>
  )
}

export default TextList
