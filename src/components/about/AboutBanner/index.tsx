import React from 'react'
import BannerAnimation from './BannerAnimation'
import { useInnerViewHeight } from 'hooks/useInnerViewHeight'

const AboutBanner = () => {
  useInnerViewHeight()
  return (
    <section className="mx-auto inner-height flex-center px-30 max-w-1600">
      <article className="leading-tight sm:max-w-520 lg:max-w-650 w-full font-extrabold text-65 sm:text-100 lg:text-[120px] under:font-open-sans text-center mt-80 break-keep">
        <h4 className=" text-c-orange-300">We Make</h4>
        <BannerAnimation />
        <h4>Brand</h4>
      </article>
    </section>
  )
}

export default AboutBanner
