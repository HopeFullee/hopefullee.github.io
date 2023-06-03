import React from 'react'
import Layout from 'components/Layout'
import HouseBanner from 'components/inhouse/HouseBanner'
import SEO from 'components/shared/SEO'

const InHousePage = () => {
  return (
    <Layout>
      <SEO title="INHOUSE" description="자체 프로젝트" />
      <HouseBanner />
    </Layout>
  )
}

export default InHousePage
