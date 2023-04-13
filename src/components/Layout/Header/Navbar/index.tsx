import React, { useRef } from 'react'
import { Link } from 'gatsby'
import { CloseIcon } from 'components/shared/Icons'
import './index.scss'

type NavbarProps = {
  onClose: () => void
  open: boolean
}

const NAVBAR_ITEMS = {
  홈: '/',
  '자체 프로젝트': '/about',
  '우리의 이야기': '/culture',
  포트폴리오: '/news',
  문의: '/contact',
}

/*
 *  ./index.scss animation 확인
 */
const ANIMATION_TERM = 300

const Navbar = ({ onClose, open }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null)
  const menuOut = () =>
    new Promise(res => {
      navRef.current?.classList.remove('toggle-menu')
      navRef.current?.classList.add('toggle-menu-out')
      setTimeout(res, ANIMATION_TERM)
    })

  const handleCloseClick = () => {
    menuOut().then(() => {
      onClose()
    })
  }

  if (!open) return <></>

  return (
    <>
      <div className="overlay" onClick={handleCloseClick}></div>
      <nav
        ref={navRef}
        className="flex flex-col fixed top-0 right-0 w-full max-w-500 h-[100vh] z-10 bg-[#C5C5C5] toggle-menu"
      >
        <button onClick={handleCloseClick} className="ml-auto text-white m-30 ">
          <CloseIcon className="w-50 h-50" />
        </button>
        <div className="flex flex-col gap-20 font-bold text-white mt-50 all:pl-75 text-32 under:font-open-sans">
          {Object.entries(NAVBAR_ITEMS).map(([key, path]) => (
            <Link key={key} to={path} className="hover:text-c-orange-300">
              {key}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-10 mt-auto text-c-gray-400 mb-75 sm:mb-50 pl-75 all:font-open-sans">
          <a href="https://www.instagram.com/telos_official/" target="_blank">
            Instagram
          </a>
          <span className="w-1 h-16 bg-c-gray-400"></span>
          <a href="https://blog.naver.com/telos_official" target="_blank">
            Blog
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
