import React from 'react'
import './src/styles/global.scss'

// 전역 리코일 루트 설정
import { RecoilRoot } from 'recoil'

export const wrapRootElement = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>
}
