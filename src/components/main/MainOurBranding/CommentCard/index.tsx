import React, { useEffect } from 'react'
import { CardItemType } from '..'
import clsx from 'clsx'
import 'aos/dist/aos.css'

type CommentCardProps = {
  cardInfo: CardItemType[]
}

const CommentCard = ({ cardInfo }: CommentCardProps) => {
  return (
    <article className="flex flex-col items-center justify-center w-full max-w-1500 gap-70 sm:gap-130 lg:gap-150 mt-30 sm:mt-100 lg:mt-120">
      {cardInfo.map(({ name, department, comment, profile, position }) => {
        return (
          <div
            key={name}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="400"
            className={clsx(
              position === 'right'
                ? 'ml-40 sm:ml-auto'
                : 'ml-40 sm:ml-80 sm:mr-auto',
              'relative bg-white flex items-center rounded-[20px] sm:rounded-[30px] shadow-[0_2px_10px_#77777740] w-[95%] sm:w-[80%] lg:w-full sm:max-w-650 lg:max-w-900 min-h-80 sm:min-h-150 lg:min-h-220 pr-20 py-10',
            )}
          >
            <img
              src={profile}
              alt="프로필 이미지"
              className="absolute left-[-60px] sm:left-[-80px] lg:left-[-100px] w-120 sm:w-170 lg:w-auto"
            />

            <div className="leading-loose ml-70 sm:ml-110 lg:ml-190 lg:leading-loose">
              <div className="flex items-center gap-10 sm:gap-20">
                <p className="font-bold text-20 sm:text-28 lg:text-36">
                  {name}
                </p>
                <p className="mt-7 text-14 sm:text-16 lg:text-24 text-c-gray-400">
                  {department}
                </p>
              </div>
              <p className="leading-relaxed tracking-tight text-15 sm:text-20 lg:text-28 break-keep">
                {comment}
              </p>
            </div>
          </div>
        )
      })}
    </article>
  )
}

export default CommentCard
