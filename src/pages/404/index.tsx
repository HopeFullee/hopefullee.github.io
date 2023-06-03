import React from 'react'
import Layout from 'components/Layout'
import BackgroundImage from 'gatsby-background-image'
import { useMainGatsbyImage } from 'hooks/useMainGatsbyImage'
import { useInnerViewHeight } from 'hooks/useInnerViewHeight'

const NotFoundPage = () => {
  const { mainBanner } = useMainGatsbyImage()
  useInnerViewHeight()
  return (
    <Layout>
      <section className="h-[90vh]">
        <BackgroundImage
          Tag="article"
          className="flex-col w-full h-full text-center gap-15 lg:gap-20 under:px-30 flex-center"
          fluid={mainBanner}
        >
          <h6 className="leading-snug font-bold text-white text-55 sm:text-80 break-keep drop-shadow-[0_4px_4px_#00000045]">
            404
          </h6>
          <p className="font-medium text-white text-24 sm:text-26 lg:text-30">
            페이지를 찾을 수 없습니다.
          </p>
        </BackgroundImage>
      </section>
    </Layout>
  )
}

export default NotFoundPage
