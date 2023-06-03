import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from '@reach/router'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { scrollPositionStateAtom } from 'store/storeScrollPosition'
import { portfolioItemCountStateAtom } from 'store/storePortfolioItemCount'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname: currentPath } = useLocation()
  // Recoil 전역 변수로 뉴스 페이지의 스크롤 좌표값을 저장 / 초기화 합니다.
  const [scrollPosition, setScrollPosition] = useRecoilState(
    scrollPositionStateAtom,
  )

  // Recoil 전역 변수로 뉴스 더보기 초기화
  const setPortfolioItemCountState = useSetRecoilState(
    portfolioItemCountStateAtom,
  )

  useEffect(() => {
    if (currentPath === '/portfolio/') {
      window.scrollTo(0, scrollPosition)

      const updatePosition = () => {
        setScrollPosition(window.scrollY)
      }

      window.addEventListener('scroll', updatePosition)
      updatePosition()
      return () => window.removeEventListener('scroll', updatePosition)
    }

    if (
      currentPath === '/' ||
      currentPath === '/about/' ||
      currentPath === '/culture/' ||
      currentPath === '/contact/'
    ) {
      setScrollPosition(0)
      setPortfolioItemCountState(1)
    }
  }, [])

  return (
    <div className="mx-auto max-w-1920 text-c-black-300">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
