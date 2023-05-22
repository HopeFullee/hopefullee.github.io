import React from 'react'
import descriptionImage from 'assets/images/inhouse/tinkleland/tinkleland_description.png'
import descriptionMobile from 'assets/images/inhouse/tinkleland/tinkleland_description_mobile.png'

const TinkleDescription = () => {
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
                팅클랜드
              </h4>
            </div>
          </div>
          <div className="md:w-[55%] flex flex-col gap-30">
            <p className="leading-relaxed text-center sm:leading-loose md:text-left lg:ml-60 sm:text-17 lg:text-18 text-c-gray-400 max-w-480 lg:max-w-580 break-keep">
              반려동물과 사람간의 공존과 소통 그리고 이해를 바탕으로 만들어진
              브랜드입니다. 펫 간식 사업을 시작으로 반려동물과 사람간의
              상호작용을 중심으로한 브랜드 컨셉 및 세계관을 구축 하였으며,
              독자적인 세계관으로 브랜드를 확장시키면서도 지속가능한 브랜딩을
              진행합니다.
            </p>
          </div>
        </div>
      </article>
      <article>
        <img
          className="hidden object-cover sm:h-200 md:h-full sm:block"
          src={descriptionImage}
          alt="팅클랜드 브랜드 설명 이미지"
        />
        <img
          className="block sm:hidden"
          src={descriptionMobile}
          alt="팅클랜드 브랜드 설명 이미지"
        />
      </article>
    </section>
  )
}

export default TinkleDescription
