import React from 'react'
import Layout from 'components/Layout'
import TinkleBanner from 'components/inhouse/tinkleland/TinkleBanner'
import TinkleDescription from 'components/inhouse/tinkleland/TinkleDescription'
import TinkleKeyword from 'components/inhouse/tinkleland/TinkleKeyword'
import TinkleScrollAnimation from 'components/inhouse/tinkleland/TinkleScrollAnimation'
import TinkleBrandStory from 'components/inhouse/tinkleland/TinkleBrandStory'
import TinkleMascot from 'components/inhouse/tinkleland/TinkleMascot'
import TinkleApplication from 'components/inhouse/tinkleland/TinkleApplication'
import TinkleSNS from 'components/inhouse/tinkleland/TinkleSNS'

const TinklelandPage = () => {
  return (
    <Layout>
      <TinkleBanner />
      <TinkleDescription />
      <TinkleKeyword />
      <TinkleScrollAnimation />
      <TinkleBrandStory />
      <TinkleMascot />
      <TinkleApplication />
      <TinkleSNS />
    </Layout>
  )
}

export default TinklelandPage
