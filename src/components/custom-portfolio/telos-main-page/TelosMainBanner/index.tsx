import React from 'react'
import { useBannerImage } from 'hooks/useBannerImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const TelosMainBanner = () => {
  const { telosMainPageBanner } = useBannerImage()

  return (
    <section className="sticky z-[-10] top-60 sm:top-86 w-full bg-white max-h-700">
      <GatsbyImage
        image={telosMainPageBanner}
        className="h-230 sm:h-auto"
        alt="텔로스 메인 페이지 포트폴리오 베너"
      />
    </section>
  )
}

export default TelosMainBanner
