import React, { useState } from 'react'
import GraphicBox from './GraphicBox'
import TextList from './TextList'

const MainProcess = () => {
  const [graphic, setGraphic] = useState('creative')

  return (
    <section className="flex flex-col gap-30 sm:gap-40 lg:gap-50 mt-100 sm:mt-140 lg:mt-180 px-30 sm:px-60 md:px-100 xxl:px-150">
      <div className="flex flex-col gap-5 lg:gap-10 ">
        <h4 className="font-bold text-28 sm:text-45 lg:text-55 text-c-black-300">
          브랜딩 프로세스
        </h4>
        <p className="text-18 sm:text-24 lg:text-28 text-c-black-300 break-keep">
          <span className="hidden sm:inline-block">
            우리는 언제나 독특하고 새로운 생각으로 접근하여 <br /> 브랜드를
            전문화하고 세상과 연결시켜 삶의 문제를 해결해 나갑니다.
          </span>
          <span className="inline-block sm:hidden">
            우리는 언제나 독특하고 새로운 생각으로 접근하여 브랜드를 전문화하고
            세상과 연결시켜 삶의 문제를 해결해 나갑니다.
          </span>
        </p>
      </div>

      <article className="flex flex-col gap-20 sm:gap-30 md:gap-40 sm:flex-row xl:gap-60">
        <GraphicBox graphicToRender={graphic} />
        <TextList graphicToSet={setGraphic} selectedItem={graphic} />
      </article>
    </section>
  )
}

export default MainProcess
