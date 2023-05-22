import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import { ProcessInfo } from '..'

type TextListProps = {
  info: ProcessInfo[]
  graphicToSet: Function
  selectedItem: number
}

const TextList = ({ graphicToSet, selectedItem, info }: TextListProps) => {
  const handleItemHover = (idx: number) => {
    graphicToSet(idx)
  }

  return (
    <ul className="flex flex-col justify-center w-full font-medium sm:gap-15 lg:gap-20 max-w-763 break-keep">
      {info.map(({ name, content }, idx) => (
        <Fragment key={name}>
          <li
            className={clsx(
              selectedItem === idx
                ? 'under:!text-c-orange-300 text-c-black-300'
                : 'text-c-gray-300',
              'py-15 sm:py-0 flex items-center gap-10 md:gap-15 cursor-default sm:text-18 md:text-20 lg:text-22 xl:text-26 xxxl:text-32',
            )}
            onMouseEnter={() => handleItemHover(idx)}
          >
            <span className="text-c-gray-300 !text-22 md:!text-24 lg:!text-26 xl:!text-30 xxxl:!text-35 !font-bold">
              {`0${idx + 1}`}
            </span>
            {content}
          </li>
          <li className="h-1 bg-[#808080]"></li>
        </Fragment>
      ))}
    </ul>
  )
}

export default TextList
