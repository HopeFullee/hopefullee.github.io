import React from 'react'
import { Link } from 'gatsby'
import arrowLeft from 'assets/images/shared/arrow_left.png'
import arrowRight from 'assets/images/shared/arrow_right.png'
import burgerMenu from 'assets/images/shared/hamburger_menu.png'

type TemplateNavigatorProps = {
  prevPage?: {
    slug: string
  }
  nextPage?: {
    slug: string
  }
  backTo: string
}

const TemplateNavigator = ({
  prevPage,
  nextPage,
  backTo,
}: TemplateNavigatorProps) => {
  return (
    <nav className="bg-white border-y-1 px-30 sm:px-50">
      <ul className="flex items-center justify-between mx-auto font-bold h-70 sm:h-90 lg:h-110 max-w-400 sm:max-w-700 lg:max-w-1000 text-25 all:text-c-gray-400">
        <li className="w-full max-w-110 under:flex-center under:gap-5">
          <Link
            to={prevPage ? prevPage.slug : ''}
            className={prevPage ? 'block' : '!hidden'}
          >
            <img src={arrowLeft} className="h-45" />
            <span className="hidden sm:block">이전</span>
          </Link>
        </li>
        <li className="w-full max-w-110 under:flex-center under:gap-5">
          <Link to={`/portfolio/?category=${backTo}`}>
            <img src={burgerMenu} />
            <span className="hidden sm:block">목록</span>
          </Link>
        </li>
        <li className="w-full max-w-110 under:flex-center under:gap-5">
          <Link
            to={nextPage ? nextPage.slug : ''}
            className={nextPage ? 'block' : '!hidden'}
          >
            <span className="hidden sm:block">다음</span>
            <img src={arrowRight} className="h-45" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default TemplateNavigator
