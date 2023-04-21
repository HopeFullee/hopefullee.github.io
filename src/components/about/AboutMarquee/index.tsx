import React, { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import './index.scss'

const AboutMarquee = () => {
  const [marqueeSpeed, setMarqueeSpeed] = useState(0)
  useEffect(() => {
    const getCurrentWidth = () => {
      const currentWidth = window.innerWidth

      if (currentWidth > 1100) {
        setMarqueeSpeed(200)
      }
      if (currentWidth <= 1100 && currentWidth > 600) {
        setMarqueeSpeed(150)
      }
      if (currentWidth <= 600) {
        setMarqueeSpeed(80)
      }
    }
    const debounceResize = (fn: Function, delay: number) => {
      let id: any

      return (...args: any) => {
        if (id) clearTimeout(id)
        id = setTimeout(() => {
          fn(...args)
        }, delay)
      }
    }

    window.addEventListener('resize', debounceResize(getCurrentWidth, 500))
    getCurrentWidth()
    return () => window.removeEventListener('resize', getCurrentWidth)
  }, [])
  return (
    <section className="mt-150 sm:mt-200 md:mt-250 lg:mt-300">
      <Marquee gradient={false} speed={marqueeSpeed}>
        <p className="font-open-sans font-bold text-65 sm:text-90 md:text-[100px] lg:text-[150px] text-c-orange-300 pr-10 sm:pr-20 lg:pr-40">
          Creative makes with a bit of difference
        </p>
      </Marquee>
      <Marquee gradient={false} direction="right" speed={marqueeSpeed}>
        <p className="font-open-sans font-bold text-65 sm:text-90 md:text-[100px] lg:text-[150px] text-white custom-outline-stroke pr-10 sm:pr-20 lg:pr-40 lg:pr-40">
          Creative makes with a bit of difference
        </p>
      </Marquee>
    </section>
  )
}

export default AboutMarquee
