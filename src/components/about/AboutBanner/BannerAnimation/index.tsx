import React, { useState, useEffect } from 'react'
import bannerImage01 from 'assets/images/about/about_banner_01.png'
import bannerImage02 from 'assets/images/about/about_banner_02.png'
import bannerImage03 from 'assets/images/about/about_banner_03.png'
import bannerImage04 from 'assets/images/about/about_banner_04.png'
import bannerImage05 from 'assets/images/about/about_banner_05.png'
import bannerImage06 from 'assets/images/about/about_banner_06.png'
import bannerImage07 from 'assets/images/about/about_banner_07.png'
import bannerImage08 from 'assets/images/about/about_banner_08.png'
import bannerImage09 from 'assets/images/about/about_banner_09.png'
import before from 'assets/images/about/about_banner_before.png'
import after from 'assets/images/about/about_banner_after.png'

const BannerAnimation = () => {
  const [currentImage, setCurrentImage] = useState(bannerImage01)
  const bannerImageArray = [
    bannerImage01,
    bannerImage02,
    bannerImage03,
    bannerImage04,
    bannerImage05,
    bannerImage06,
    bannerImage07,
    bannerImage08,
    bannerImage09,
  ]

  useEffect(() => {
    let currentIDX = 1

    setInterval(() => {
      setCurrentImage(bannerImageArray[currentIDX])
      if (currentIDX < 8) {
        currentIDX++
      } else {
        currentIDX = 0
      }
    }, 800)
  }, [])

  return (
    <div className="flex items-center text-16 h-300 sm:h-340 lg:h-380">
      <img src={before} alt="[" className="h-44 sm:h-54 lg:h-auto" />
      <div className="flex justify-center mx-auto">
        <img
          src={currentImage}
          alt="배너 이미지"
          className="w-[80%] sm:w-[80%] lg:w-full h-[80%] sm:h-[80%] lg:h-full "
        />
      </div>

      <img src={after} alt="]" className="h-44 sm:h-54 lg:h-auto" />
    </div>
  )
}

export default BannerAnimation
