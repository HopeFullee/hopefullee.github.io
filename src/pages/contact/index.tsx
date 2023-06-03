import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/shared/SEO'
import BrandingInfo from 'components/contact/BrandingInfo'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="CONTACT" description="텔로스 연락처" />
      <BrandingInfo />
    </Layout>
  )
}

export default ContactPage
