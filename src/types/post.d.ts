// contents 내부 마크다운 파일의 frontmatter의 타입
type PostFrontmatterType = {
  date: string
  categories: string[]
  title: string
  description: string
  stickyTitle: string
  stickyContent: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
    }
  }
  bannerImage: {
    childImageSharp: {
      gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
    }
  }
  sliderImage: {
    childImageSharp: {
      gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
    }
  }[]
  sideImage: {
    childImageSharp: {
      gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
    }
  }[]
  bottomImage: {
    childImageSharp: {
      gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
    }
  }
}

// 포트폴리오 리스트 아이템의 타입
type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
    categories: string[]
  }
}
