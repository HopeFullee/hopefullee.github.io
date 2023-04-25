import React from 'react'
import CommentCard from './CommentCard'
import clsx from 'clsx'
import profile01 from 'assets/images/main/main_chat_01.png'
import profile02 from 'assets/images/main/main_chat_02.png'
import profile03 from 'assets/images/main/main_chat_03.png'
import profile04 from 'assets/images/main/main_chat_04.png'
import profile05 from 'assets/images/main/main_chat_05.png'
import profile06 from 'assets/images/main/main_chat_06.png'
import profile07 from 'assets/images/main/main_chat_07.png'
import profile08 from 'assets/images/main/main_chat_08.png'

export type CardItemType = {
  name: string
  department: string
  comment: string
  profile: any
  position: string
}

const CARD_ITEM_INFO: CardItemType[] = [
  {
    name: '동그리',
    department: '디자이너',
    comment: '“브랜딩은 나다움을 보여주기 위한 과정이다”',
    profile: profile01,
    position: 'right',
  },
  {
    name: '또또',
    department: '마케터',
    comment: `“브랜드를 '무엇'이 아닌 '어떻게'의 관점으로 생각하는 것”`,
    profile: profile02,
    position: 'left',
  },
  {
    name: '강냉이',
    department: '디자이너',
    comment: '“브랜딩은 하나의 인격체를 만드는 과정이라고 생각합니다”',
    profile: profile03,
    position: 'right',
  },
  {
    name: '히유뚱',
    department: '마케터',
    comment: '“고객의 머릿속에 브랜드를 확실하게 알리고 각인하는 과정”',
    profile: profile04,
    position: 'left',
  },
  {
    name: '박팔복',
    department: '디자이너',
    comment: '“브랜딩은 소비자와 판매자의 마음을 연결하는 징검다리”',
    profile: profile05,
    position: 'right',
  },
  {
    name: '잇순이',
    department: '마케터',
    comment: '“브랜딩이란 소비자와의 관계를 발전 시켜나가는 과정”',
    profile: profile06,
    position: 'left',
  },
  {
    name: '앙큼캣',
    department: '디자이너',
    comment: '“탄탄한 기초부터 관리까지 중요한 집을 짓는 것과 같다”',
    profile: profile07,
    position: 'right',
  },
  {
    name: '고덕진',
    department: '마케터',
    comment: '“브랜딩이란 브랜드가 전달하는 일관성있는 경험”',
    profile: profile08,
    position: 'left',
  },
]

const MainOurBranding = () => {
  return (
    <section className="bg-[url('assets/images/main/our_branding_bg.png')] bg-contain md:bg-cover bg-[50%_70%] mt-140 sm:mt-200 lg:mt-250 lg:pb-150">
      <div className="flex flex-col mx-auto gap-30 sm:gap-40 lg:gap-50 px-30 max-w-1600">
        <div className="flex flex-col gap-5 lg:gap-10">
          <h4 className="font-bold text-28 sm:text-45 lg:text-55 text-c-black-300">
            우리의 브랜딩
          </h4>
          <p className="text-18 sm:text-24 lg:text-28 text-c-black-300">
            우리의 영감은 새로운 아이디어로 브랜드의 가치를 올립니다.
          </p>
        </div>

        <CommentCard cardInfo={CARD_ITEM_INFO} />
      </div>
    </section>
  )
}

export default MainOurBranding
