import React from 'react'
import { MainInhouseArrow } from 'components/shared/Icons'
import clsx from 'clsx'
import './index.scss'

type ItemCardProps = {
  cardState: boolean
  cardName: string
  children: React.ReactNode
}

const ItemCard = ({ cardState, cardName, children }: ItemCardProps) => {
  return (
    <div
      className={clsx(
        cardState ? 'card-on' : 'card-off',
        'relative h-full py-20 sm:rounded-[0_15px_15px_0] md:rounded-[0_30px_30px_0] flex items-center sm:w-[115%] max-w-900',
      )}
    >
      <div className="w-full md:pr-20 sm:pl-60 md:pl-100 xxl:pl-150">
        <h6 className="font-bold text-center sm:text-left text-24 sm:text-30 md:text-36 xxl:text-40">
          {cardName}
        </h6>
        <p className="hidden lg:block lg:text-18 xxl:text-22 break-keep">
          {children}
        </p>
      </div>
      {cardState && (
        <MainInhouseArrow className="absolute right-[2%] sm:right-[7%] h-35 sm:h-40 ml-auto md:h-44 lg:h-54 xxl:h-auto" />
      )}
    </div>
  )
}

export default ItemCard
