import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import { useRecoilValue } from 'recoil'
import { currentCategoryStateAtom } from 'store/storeCurrentCategory'
import TemplateBanner from 'components/templates/TemplateBanner'
import TemplateDescription from 'components/templates/TemplateDescription'
import TemplateSlider from 'components/templates/TemplateSlider'
import TemplateContent from 'components/templates/TemplateContent'
import TemplateNavigator from 'components/templates/TemplateNavigator'
import TelosMainBanner from 'components/custom-portfolio/telos-main-page/TelosMainBanner'
import TelosMainDescription from 'components/custom-portfolio/telos-main-page/TelosMainDescription'
import TelosMainConcept from 'components/custom-portfolio/telos-main-page/TelosMainConcept'
import TelosMainIdentity from 'components/custom-portfolio/telos-main-page/TelosMainIdentity'
import TelosMainApplication from 'components/custom-portfolio/telos-main-page/TelosMainApplication'
import TelosMainRenewal from 'components/custom-portfolio/telos-main-page/TelosMainRenewal'

type PostTemplateProps = {
  data: {
    markdown: {
      excerpt: string
      frontmatter: {
        layoutType: string
        title: string
        categories: string
        description: string
        stickyTitle: string
        stickyDescription: string
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
  pageContext: { previous, next },
}: PostTemplateProps) {
  const { frontmatter, html } = markdown

  const categoryQueryString = useRecoilValue(currentCategoryStateAtom)

  return (
    <Layout>
      {frontmatter.layoutType === 'custom' ? (
        <>
          <TelosMainBanner />
          <TelosMainDescription />
          <TelosMainConcept />
          <TelosMainIdentity />
          <TelosMainApplication />
          <TelosMainRenewal />
          <TemplateNavigator
            prevPage={previous}
            nextPage={next}
            backTo={categoryQueryString}
          />
        </>
      ) : (
        <>
          <TemplateBanner
            frontmatterBanner={
              frontmatter.bannerImage.childImageSharp.gatsbyImageData
            }
          />
          <TemplateDescription
            title={frontmatter.title}
            categories={frontmatter.categories}
            description={frontmatter.description}
          />
          <TemplateSlider sliderImages={frontmatter.sliderImage} />
          <TemplateContent
            layoutType={frontmatter.layoutType}
            stickyTitle={frontmatter.stickyTitle}
            stickyDescription={frontmatter.stickyDescription}
            sideImage={frontmatter.sideImage}
            bottomImage={frontmatter.bottomImage}
          />
          <TemplateNavigator
            prevPage={previous}
            nextPage={next}
            backTo={categoryQueryString}
          />
        </>
      )}
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
        layoutType
        title
        categories
        description
        stickyTitle
        stickyDescription
        bannerImage {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        sliderImage {
          childImageSharp {
            gatsbyImageData(
              width: 1320
              height: 700
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        sideImage {
          childImageSharp {
            gatsbyImageData(
              width: 1320
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        bottomImage {
          childImageSharp {
            gatsbyImageData(quality: 90, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
