import React, { useEffect, useState } from 'react'
import { useMainGatsbyImage } from 'hooks/useMainGatsbyImage'
import BackgroundImage from 'gatsby-background-image'
import {
  MainBannerShape01,
  MainBannerShape02,
  MainBannerShape03,
  MainBannerShape04,
} from 'components/shared/Icons'
import { useInnerViewHeight } from 'hooks/useInnerViewHeight'
import './index.scss'

const MainBanner = () => {
  const [hydrateBg, setHydrateBg] = useState(undefined)
  const { mainBanner } = useMainGatsbyImage()
  useInnerViewHeight()

  useEffect(() => {
    setHydrateBg(mainBanner)
  }, [])
  return (
    <section className="relative w-full overflow-hidden inner-height">
      <BackgroundImage
        Tag="article"
        className="flex-col w-full h-full font-bold text-center text-white gap-15 lg:gap-20 under:px-30 flex-center"
        fluid={hydrateBg}
      >
        <h2 className="leading-snug text-32 sm:text-45 lg:text-55 mt-100 sm:mt-150 break-keep drop-shadow-xl">
          우리는 브랜드가 <br />
          세상에 탄생될 수 있도록 돕습니다.
        </h2>
        <p className="text-24 sm:text-26 lg:text-30">We are branding team</p>
      </BackgroundImage>
      <MainBannerShape01 className="absolute shape-one float-up" />
      <MainBannerShape02 className="absolute shape-two float-down" />
      <MainBannerShape03 className="absolute shape-three float-up" />
      <MainBannerShape04 className="absolute shape-four float-down" />
    </section>
  )
}

export default MainBanner
