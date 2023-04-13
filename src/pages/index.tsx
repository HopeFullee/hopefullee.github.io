import React from 'react'
import Layout from 'components/Layout'
import MainBanner from 'components/main/MainBanner'
import MainInHouse from 'components/main/MainInHouse'
import MainProcess from 'components/main/MainProcess'
import MainOurBranding from 'components/main/MainOurBranding'
import MainPartners from 'components/main/MainPartners'
import MainContact from 'components/main/MainContact'

const IndexPage = () => {
  return (
    <Layout>
      <MainBanner />
      <MainInHouse />
      <MainProcess />
      <MainOurBranding />
      <MainPartners />
      <MainContact />
    </Layout>
  )
}

export default IndexPage
