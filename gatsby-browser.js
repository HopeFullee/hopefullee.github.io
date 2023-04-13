import React from 'react'
import './src/styles/global.scss'

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

// css vh 의 값을 실제 viewport 의 값으로 변경
// styles/global.scss 상단 inner-height 클래스에 적용
// const setVh = () => {
//   document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
// }
// window.addEventListener('resize', setVh)
// setVh()
