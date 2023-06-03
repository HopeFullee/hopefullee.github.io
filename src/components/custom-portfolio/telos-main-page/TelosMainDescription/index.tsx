import React from 'react'

const TelosMainDescription = () => {
  return (
    <section className="w-full mx-auto bg-white max-w-1920">
      <article className="flex-center px-30 min-h-450 sm:min-h-500 py-50">
        <div className="flex-col w-full gap-20 flex-center md:items-start md:flex-row sm:gap-30 md:gap-0">
          <div className="md:w-[45%] flex-center flex-col">
            <div>
              <p className="text-center text-c-gray-400 text-15 sm:text-16 lg:text-20 md:text-left">
                Brand eXperience
              </p>
              <h4 className="font-bold text-32 sm:text-40 lg:text-50">
                (주)텔로스
              </h4>
            </div>
          </div>
          <div className="md:w-[55%] flex flex-col gap-30">
            <p className="leading-relaxed text-center sm:leading-loose md:text-left lg:ml-60 sm:text-17 lg:text-18 text-c-gray-400 max-w-650 break-keep">
              (주)텔로스 브랜드 자산을 바탕으로 새로운 방향성을 정의한 후,
              <br className="hidden xl:block" /> 이에 따른 브랜드 디자인 원칙을
              도출하여 텔로스만의 아이덴티티를 재구축하여
              <br className="hidden xl:block" /> Corporate Identity 리뉴얼을
              진행하였습니다.
            </p>
            <p className="leading-relaxed text-center sm:leading-loose md:text-left lg:ml-60 sm:text-17 lg:text-18 text-c-gray-400 max-w-650 break-keep">
              도출된 브랜드 디자인 원칙을 바탕으로 텔로스만의 아이덴티티를
              만들어
              <br className="hidden xl:block" /> 일관성 있게 적용하기 위해
              디자인 매뉴얼과 다양한 어플리케이션을 제공합니다.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default TelosMainDescription
