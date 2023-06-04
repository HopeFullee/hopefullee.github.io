import { graphql, useStaticQuery } from 'gatsby'
/*
 *  pages/index 페이지 banner 이미지 graphQL로 조회해서 반환
 */
export const useMainGatsbyImage = () => {
  const imageData = useStaticQuery(graphql`
    query mainPageImage {
      MainBanner: file(name: { eq: "branding_main_banner" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const mainBanner = imageData.MainBanner.childImageSharp.fluid

  return {
    mainBanner,
  }
}
