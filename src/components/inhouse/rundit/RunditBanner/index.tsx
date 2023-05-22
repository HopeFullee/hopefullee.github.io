import React from 'react'
import { useBannerImage } from 'hooks/useBannerImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const RunditBanner = () => {
  const { runditBanner } = useBannerImage()

  return (
    <section className="sticky z-[-10] top-60 sm:top-86 w-full bg-white max-h-700">
      <GatsbyImage
        image={runditBanner}
        className="h-230 sm:h-auto"
        alt="팅클랜드 베너 이미지"
      />
    </section>
  )
}

export default RunditBanner
