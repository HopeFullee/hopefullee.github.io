import React from 'react'
import brandstoryImage from 'assets/images/inhouse/tinkleland/tinkle_brandstory.png'

const TinkleBrandStory = () => {
  return (
    <section className="bg-white pb-100 sm:pb-175 lg:pb-200 pt-50 sm:pt-100 lg:pt-200 px-30 lg:px-50">
      <div className="flex-col mx-auto flex-center lg:flex-row max-w-700 lg:max-w-1600 gap-50 lg:h-800">
        <article className="flex flex-col w-full h-full gap-30 lg:gap-40">
          <h4 className="tracking-tighter font-bold text-50 sm:text-75 lg:text-100 text-c-gray-200 font-open-sans lg:indent-[-10px] leading-tight text-center lg:text-left">
            BRAND <span className="mr-5 text-c-gray-200 sm:mr-0">STORY</span>
          </h4>
          <ul className="flex flex-col leading-relaxed text-center sm:leading-loose gap-30 lg:gap-50 sm:text-18 lg:text-20 lg:max-w-600 break-keep sm:text-left">
            <li>
              원래는 동물들이 살아가던 마을. 하지만, 반려동물을 키우는 인간들이
              많아지면서{' '}
              <strong>팅클랜드의 동물 수는 점차 줄어들고 있었다.</strong> 마을
              창립자의 자손인 쿠키는 쇠퇴하는 팅클랜드를 다시 일으키려 하지만{' '}
              <strong>동물들만의 힘으로는 역부족.</strong>
            </li>
            <li>
              <strong>예지력이 있는 쿠키</strong> 는 어느 날 하염없는 고민 끝에
              잠이 들었는데, 꿈에서 마을을 떠났던 동물들이 인간들과 함께 마을로
              돌아오는 장면을 본다. 예지몽임을 직감한 쿠키는{' '}
              <strong>인간과 동물이 함께 살 수 있도록</strong> 인간을 위한 밭을
              만들어준다.
            </li>
            <li>
              <strong>인간들은 밭에서 난 아이디어를 팅클랜드에 납품하여</strong>{' '}
              동물들을 만족시키고 합당한 보상을 받으며{' '}
              <strong>서로 공생하게 된다.</strong>
            </li>
          </ul>
        </article>
        <article className="w-full h-full ">
          <img
            src={brandstoryImage}
            alt="팅클랜드 컨셉 아트"
            className="object-cover w-full h-auto lg:h-[780px]"
          />
        </article>
      </div>
    </section>
  )
}

export default TinkleBrandStory
