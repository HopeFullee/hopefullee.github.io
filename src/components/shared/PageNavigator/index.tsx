import React from 'react'
import { Link } from 'gatsby'
import arrowLeft from 'assets/images/shared/arrow_left.png'
import arrowRight from 'assets/images/shared/arrow_right.png'
import burgerMenu from 'assets/images/shared/hamburger_menu.png'

type PageNavigatorProps = {
  prevPage: string
  list: string
  nextPage: string
}

const PageNavigator = ({ prevPage, list, nextPage }: PageNavigatorProps) => {
  return (
    <div className="bg-white border-y-1 px-30 sm:px-50">
      <nav className="flex justify-between mx-auto font-bold h-70 sm:h-90 lg:h-110 under:flex-center under:gap-5 max-w-400 sm:max-w-700 lg:max-w-1000 text-15 sm:text-20 lg:text-25 all:text-c-gray-400">
        <Link to={prevPage}>
          <img src={arrowLeft} className="h-30 sm:h-35 lg:h-50" />
          <span className="hidden sm:block">이전</span>
        </Link>
        <Link to={list}>
          <img src={burgerMenu} className="h-30 sm:h-35 lg:h-45" />
          <span className="hidden sm:block">목록</span>
        </Link>
        <Link to={nextPage}>
          <span className="hidden sm:block">다음</span>
          <img src={arrowRight} className="h-30 sm:h-35 lg:h-50" />
        </Link>
      </nav>
    </div>
  )
}

export default PageNavigator
