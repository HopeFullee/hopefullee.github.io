import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type SideImagesProps = {
  layoutType: string
  sideImage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }[]
}

const SideImages = ({ layoutType, sideImage }: SideImagesProps) => {
  return (
    <>
      {layoutType === 'A' && (
        <ul className="flex flex-col justify-center w-full lg:flex-row max-w-440 lg:max-w-1000 gap-30 lg:gap-65">
          <li className="flex flex-col justify-end gap-30 lg:gap-65">
            <GatsbyImage
              image={sideImage[0].childImageSharp.gatsbyImageData}
              alt="디자인 상세 이미지"
            />
            <GatsbyImage
              image={sideImage[1].childImageSharp.gatsbyImageData}
              alt="디자인 상세 이미지"
            />
            <GatsbyImage
              image={sideImage[2].childImageSharp.gatsbyImageData}
              alt="디자인 상세 이미지"
            />
          </li>
        </ul>
      )}
      {layoutType === 'B' && (
        <ul className="flex flex-col justify-center w-full max-w-440 lg:max-w-1000 gap-30 lg:gap-65">
          <li className="flex flex-col lg:flex-row gap-30 lg:gap-65">
            <GatsbyImage
              image={sideImage[0].childImageSharp.gatsbyImageData}
              alt="디자인 상세 이미지"
            />
            <GatsbyImage
              image={sideImage[1].childImageSharp.gatsbyImageData}
              alt="디자인 상세 이미지"
            />
          </li>
          <li className="flex flex-col justify-end gap-30 lg:gap-65">
            <GatsbyImage
              image={sideImage[2].childImageSharp.gatsbyImageData}
              alt="디자인 상세 이미지"
            />
            <GatsbyImage
              image={sideImage[3].childImageSharp.gatsbyImageData}
              alt="디자인 상세 이미지"
            />
          </li>
        </ul>
      )}
    </>
  )
}

export default SideImages
