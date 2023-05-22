import React, { useState } from 'react'
import GraphicBox from './GraphicBox'
import TextList from './TextList'
import GraphicOne from 'assets/images/main/main_process_01.gif'
import GraphicTwo from 'assets/images/main/main_process_02.gif'
import GraphicThree from 'assets/images/main/main_process_03.gif'
import GraphicFour from 'assets/images/main/main_process_04.gif'

export type ProcessInfo = {
  name: string
  content: string
  img: string
}

const PROCESS_INFO: ProcessInfo[] = [
  {
    name: 'creative',
    content: '창조를 바라는 고민에 혁신으로 응답하기 위해',
    img: GraphicOne,
  },
  {
    name: 'thinking',
    content: '늘 고민하고 분석하며',
    img: GraphicTwo,
  },
  {
    name: 'outstand',
    content: '누구의 예상도 뛰어넘는',
    img: GraphicThree,
  },
  {
    name: 'partners',
    content: '영원한 파트너로 지속 가능한 브랜드를 실현합니다.',
    img: GraphicFour,
  },
]

const MainProcess = () => {
  const [selected, setSelected] = useState(0)

  return (
    <section className="flex flex-col mx-auto gap-30 sm:gap-40 lg:gap-50 mt-100 sm:mt-200 lg:mt-250 px-30 max-w-1600">
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
        <GraphicBox info={PROCESS_INFO} graphicToRender={selected} />
        <TextList
          info={PROCESS_INFO}
          graphicToSet={setSelected}
          selectedItem={selected}
        />
      </article>
    </section>
  )
}

export default MainProcess
