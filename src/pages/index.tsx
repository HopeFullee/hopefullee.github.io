import React, { useEffect } from 'react'
import Layout from 'components/Layout'
import MainBanner from 'components/main/MainBanner'
import MainInHouse from 'components/main/MainInHouse'
import MainProcess from 'components/main/MainProcess'
import MainOurBranding from 'components/main/MainOurBranding'
import MainPartners from 'components/main/MainPartners'
import MainContact from 'components/main/MainContact'
import AOS from 'aos'
import SEO from 'components/shared/SEO'

const IndexPage = () => {
  // 메인 페이지 랜더 시 AOS 애니메이션 refresh 적용. (애니메이션 오류 방지)
  useEffect(() => {
    AOS.init()

    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }, [])
  return (
    <Layout>
      <SEO title="TELOS BRANDING" description="We are branding team" />
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
