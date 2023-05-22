import React from 'react'
import Layout from 'components/Layout'
import RunditBanner from 'components/inhouse/rundit/RunditBanner'
import RunditDescription from 'components/inhouse/rundit/RunditDescription'
import RunditSlider from 'components/inhouse/rundit/RunditSlider'
import RunditGrid from 'components/inhouse/rundit/RunditGrid'
import RunditLogo from 'components/inhouse/rundit/RunditLogo'
import RunditApplication from 'components/inhouse/rundit/RunditApplication'

const RunditPage = () => {
  return (
    <Layout>
      <RunditBanner />
      <RunditDescription />
      <RunditSlider />
      <RunditGrid />
      <RunditLogo />
      <RunditApplication />
    </Layout>
  )
}

export default RunditPage
