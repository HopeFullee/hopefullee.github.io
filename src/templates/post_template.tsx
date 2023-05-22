import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from 'components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useRecoilValue } from 'recoil'
import { currentCategoryStateAtom } from 'store/storeCurrentCategory'

type PostTemplateProps = {
  data: {
    markdown: {
      excerpt: string
      frontmatter: {
        title: string
        description: string
        stickyTitle: string
        stickyContent: string
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
      }
      html: string
    }
  }
  pageContext: {
    previous?: {
      slug: string
    }
    next?: {
      slug: string
    }
  }
}

const PostTemplate = function ({
  data: { markdown },
  pageContext: { next },
}: PostTemplateProps) {
  const { frontmatter, html } = markdown

  const categoryQueryString = useRecoilValue(currentCategoryStateAtom)

  return (
    <Layout>
      <section className="w-full mx-auto px-15 mt-60 max-w-1440 sm:mt-80 md:mt-100 lg:mt-120"></section>
    </Layout>
  )
}

export default PostTemplate

// gatsby-node.js 에서 뉴스 리스트에서 선택했던 아이템의 slug 정보를 포함 시켜 포스트 생성
// 생성과정 포함된 slug에 해당하는 쿼리 데이터 호출
export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    markdown: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      excerpt(pruneLength: 100)
      frontmatter {
        title
        description
        stickyTitle
        stickyContent
        bannerImage {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 100
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        sliderImage {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 100
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
