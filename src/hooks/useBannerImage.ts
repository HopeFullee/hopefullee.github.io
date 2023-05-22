import { graphql, useStaticQuery } from 'gatsby'
/*
 *  pages/index 페이지 banner 이미지 graphQL로 조회해서 반환
 */
export const useBannerImage = () => {
  const imageData = useStaticQuery(graphql`
    query bannerImages {
      tinklelandBanner: file(name: { eq: "tinkleland_banner" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      runditBanner: file(name: { eq: "rundit_banner" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
      telosMainPageBanner: file(
        name: { eq: "portfolio_telos_mainpage_banner" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)

  const tinklelandBanner =
    imageData.tinklelandBanner.childImageSharp.gatsbyImageData
  const runditBanner = imageData.runditBanner.childImageSharp.gatsbyImageData
  const telosMainPageBanner =
    imageData.telosMainPageBanner.childImageSharp.gatsbyImageData

  return {
    tinklelandBanner,
    runditBanner,
    telosMainPageBanner,
  }
}
