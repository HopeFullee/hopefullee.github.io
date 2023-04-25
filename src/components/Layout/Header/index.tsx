import React, { useState } from 'react'
import { TelosLogo, HamburgerIcon } from 'components/shared/Icons'
import { Link } from 'gatsby'
import Navbar from './Navbar'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleMenuOpen = () => {
    setToggleMenu(true)
  }

  const handleMenuClose = () => {
    setToggleMenu(false)
  }

  return (
    <header className="fixed top-0 left-[50%] translate-x-[-50%] z-20 flex items-center justify-between w-full bg-white max-w-1920 border-b-1 h-60 px-15 sm:px-30 sm:h-86 lg:px-50">
      <Link to="/" aria-label="TELOS">
        <TelosLogo className="w-full h-36 sm:h-46" alt="Telos logo" />
      </Link>

      <HamburgerIcon
        onClick={handleMenuOpen}
        className="mr-[-5px] sm:mr-[-15px] h-full w-38 sm:w-45 cursor-pointer stroke-[#C7C7C7]"
      />

      <Navbar open={toggleMenu} onClose={handleMenuClose} />
    </header>
  )
}

export default Header
