import React from 'react'
import BannerAnimation from './BannerAnimation'

const AboutBanner = () => {
  return (
    <section className="mx-auto h-[100vh] flex-center px-30 max-w-1600">
      <article className="leading-tight sm:max-w-520 lg:max-w-650 w-full font-extrabold text-65 sm:text-100 lg:text-[120px] under:font-open-sans text-center break-keep mt-[5%]">
        <h4 className=" text-c-orange-300">We Make</h4>
        <BannerAnimation />
        <h4>Brand</h4>
      </article>
    </section>
  )
}

export default AboutBanner
