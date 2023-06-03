import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type TemplateBannerProps = {
  frontmatterBanner: IGatsbyImageData
}

const TemplateBanner = ({ frontmatterBanner }: TemplateBannerProps) => {
  return (
    <section className="sticky z-[-10] top-60 sm:top-86 w-full bg-white max-h-700">
      <GatsbyImage
        image={frontmatterBanner}
        className="h-230 sm:h-auto"
        alt="팅클랜드 베너 이미지"
      />
    </section>
  )
}

export default TemplateBanner
