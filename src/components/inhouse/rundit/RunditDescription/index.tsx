import React from 'react'
import descriptionImage from 'assets/images/inhouse/rundit/rundit_description.png'
import descriptionMobile from 'assets/images/inhouse/tinkleland/tinkleland_description_mobile.png'

const RunditDescription = () => {
  return (
    <section className="w-full mx-auto bg-white max-w-1920">
      <article className="flex-center px-30 min-h-450 sm:min-h-500 py-50">
        <div className="flex-col w-full gap-20 flex-center md:items-start md:flex-row sm:gap-30 md:gap-0">
          <div className="md:w-[45%] flex-center flex-col">
            <div>
              <p className="text-c-gray-400 text-15 sm:text-16 lg:text-20 md:text-left">
                Brand eXperience
              </p>
              <h4 className="font-bold text-32 sm:text-40 lg:text-50">
                RUNDIT
              </h4>
            </div>
          </div>
          <div className="md:w-[55%] flex flex-col gap-30">
            <p className="leading-relaxed text-center sm:leading-loose md:text-left lg:ml-60 sm:text-17 lg:text-18 text-c-gray-400 max-w-650 break-keep">
              런딧은 스포츠와 일상의 사이에서 ‘편안함과 멋스러움이 공존할 수
              있을까’란 질문에서
              <br className="hidden xl:block" /> 시작되었습니다. “남들과는
              다르게 나만의 길을 향해 달리자”라는 모토로 기존 브랜드와
              <br className="hidden xl:block" /> 차별화를 가지는 남성 스포츠
              의류 브랜드입니다.
            </p>
            <p className="leading-relaxed text-center sm:leading-loose md:text-left lg:ml-60 sm:text-17 lg:text-18 text-c-gray-400 max-w-650 break-keep">
              브랜드 핵심 가치를 편리함과 자신감으로 설정하여 애슬레틱하고
              세련된
              <br className="hidden xl:block" /> 브랜드 아이덴티티를 설정하고
              구축하였습니다.
            </p>
          </div>
        </div>
      </article>
      <article>
        <img
          className="object-cover min-h-800 sm:min-h-1300 lg:min-h-none "
          src={descriptionImage}
          alt="런딧 브랜드 설명 이미지"
        />
      </article>
    </section>
  )
}

export default RunditDescription
