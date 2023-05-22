import React from 'react'
import Layout from 'components/Layout'
import TelosMainBanner from 'components/custom-portfolio/telos-main-page/TelosMainBanner'
import TelosMainDescription from 'components/custom-portfolio/telos-main-page/TelosMainDescription'
import TelosMainConcept from 'components/custom-portfolio/telos-main-page/TelosMainConcept'
import TelosMainIdentity from 'components/custom-portfolio/telos-main-page/TelosMainIdentity'
import TelosMainApplication from 'components/custom-portfolio/telos-main-page/TelosMainApplication'
import TelosMainRenewal from 'components/custom-portfolio/telos-main-page/TelosMainRenewal'
import PageNavigator from 'components/shared/PageNavigator'

const TelosMainPage = () => {
  return (
    <Layout>
      <TelosMainBanner />
      <TelosMainDescription />
      <TelosMainConcept />
      <TelosMainIdentity />
      <TelosMainApplication />
      <TelosMainRenewal />
      <PageNavigator prevPage="#" list="/portfolio" nextPage="#" />
    </Layout>
  )
}

export default TelosMainPage
