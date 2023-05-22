import React from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto max-w-1920">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
