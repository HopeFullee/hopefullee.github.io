import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import SideImages from './SideImages'

type TemplateContentProps = {
  layoutType: string
  stickyTitle: string
  stickyDescription: string
  sideImage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }[]
  bottomImage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const TemplateContent = ({
  layoutType,
  stickyTitle,
  stickyDescription,
  sideImage,
  bottomImage,
}: TemplateContentProps) => {
  return (
    <section className="flex-col bg-white flex-center py-100 sm:py-150 lg:pt-250 gap-50 sm:gap-75">
      <article className="flex flex-col items-center justify-between w-full gap-50 md:items-stretch md:flex-row px-30 lg:px-50 max-w-950 lg:max-w-1650">
        <div className="relative">
          <div className="sticky flex flex-col leading-relaxed top-[15%] gap-20 lg:gap-30 max-w-440 md:max-w-350 lg:max-w-460 break-keep text-left">
            <h6 className="font-bold font-open-sans text-22 sm:text-26 lg:text-35">
              {stickyTitle}
            </h6>
            <p className="sm:text-18 lg:text-20 text-[#616161]">
              {stickyDescription}
            </p>
          </div>
        </div>
        <SideImages layoutType={layoutType} sideImage={sideImage} />
      </article>
      <article className="mt-50 lg:mt-150">
        <GatsbyImage
          image={bottomImage.childImageSharp.gatsbyImageData}
          alt="디자인 상세 이미지"
          className="object-cover min-h-300"
        />
      </article>
    </section>
  )
}

export default TemplateContent
