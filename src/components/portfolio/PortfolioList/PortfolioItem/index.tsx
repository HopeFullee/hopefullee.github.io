import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

type PortfolioItemProps = PostFrontmatterType & { link: string }
const PortfolioItem = ({
  title,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}: PortfolioItemProps) => {
  return (
    <Link to={link} className="overflow-hidden">
      <article>
        <GatsbyImage
          className="w-full"
          image={gatsbyImageData}
          alt={'텔로스 뉴스 썸네일 이미지'}
        />
        <p className="mt-10 truncate text-18 ssm:text-20 md:text-22">{title}</p>
      </article>
    </Link>
  )
}

export default PortfolioItem
