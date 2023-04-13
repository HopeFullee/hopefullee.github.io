import React from 'react'
import GraphicOne from 'assets/images/main/main_process_01.png'

type GraphicBoxProps = {
  graphicToRender: String
}

const GraphicBox = ({ graphicToRender }: GraphicBoxProps) => {
  return (
    <div className="flex-col w-full sm:w-[80%] lg:w-full rounded-xl gap-15 md:gap-20 lg:gap-30 flex-center py-40 lg:py-50 max-w-765 border-1 border-[#C7C7C7]">
      <img
        className="h-130 md:h-160 lg:h-auto"
        src={GraphicOne}
        alt="Creative"
      />
      <p className="font-medium text-26 md:text-34 lg:text-40">
        <span className="text-c-orange-300 !text-24 md:!text-30 lg:!text-35 !font-bold">
          {graphicToRender === 'creative' && '01'}
          {graphicToRender === 'thinking' && '02'}
          {graphicToRender === 'outstand' && '03'}
          {graphicToRender === 'partners' && '04'}
        </span>{' '}
        {graphicToRender}
      </p>
    </div>
  )
}

export default GraphicBox
