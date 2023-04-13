import React from 'react'
import { Info } from '..'

type GraphicBoxProps = {
  graphicToRender: number
  info: Info[]
}

const GraphicBox = ({ graphicToRender, info }: GraphicBoxProps) => {
  const selectedImgSrc = info[graphicToRender].img
  const selectedName = info[graphicToRender].name
  const itemIdxStr = (graphicToRender + 1).toString().padStart(2, '0')

  return (
    <div className="flex-col w-full sm:w-[80%] lg:w-full rounded-xl gap-15 md:gap-20 lg:gap-30 flex-center py-40 lg:py-50 max-w-765 border-1 border-[#C7C7C7]">
      <img
        className="h-130 md:h-160 lg:h-auto"
        src={selectedImgSrc}
        alt="Creative"
      />
      <p className="font-medium text-26 md:text-34 lg:text-40">
        <span className="text-c-orange-300 !text-24 md:!text-30 lg:!text-35 !font-bold">
          {itemIdxStr}
        </span>{' '}
        {selectedName}
      </p>
    </div>
  )
}

/**
 * 리렌더링 조건
 */
// 1. props가 바뀌었을때
// 2. state가 바뀌었을떄
// 3. 부모가 리렌더링

/**
 * props 특성
 */
//props -> 컴포넌트 속성값
//props -> 단방향
//props -> readOnly

export default GraphicBox
