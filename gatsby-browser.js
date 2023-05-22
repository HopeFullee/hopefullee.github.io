import React from 'react'
import './src/styles/global.scss'

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

// 전역 리코일 루트 설정
import { RecoilRoot } from 'recoil'
import { ParallaxProvider } from 'react-scroll-parallax'

export const wrapRootElement = ({ element }) => {
  return (
    <ParallaxProvider>
      <RecoilRoot>{element}</RecoilRoot>
    </ParallaxProvider>
  )
}
