import React from 'react'
import Layout from 'components/Layout'
import AboutBanner from 'components/about/AboutBanner'
import AboutDescription from 'components/about/AboutDescription'
import AboutMarquee from 'components/about/AboutMarquee'
import AboutSlider from 'components/about/AboutSlider'
import AboutService from 'components/about/AboutService'
import SEO from 'components/shared/SEO'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="ABOUT" description="우리의 이야기" />
      <AboutBanner />
      <AboutDescription />
      <AboutMarquee />
      <AboutSlider />
      <AboutService />
    </Layout>
  )
}

export default AboutPage
