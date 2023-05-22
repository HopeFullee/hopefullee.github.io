import React, { useState, useEffect } from 'react'
import { TelosLogo, HamburgerIcon } from 'components/shared/Icons'
import { Link } from 'gatsby'
import Navbar from './Navbar'
import clsx from 'clsx'

const Header = () => {
  const [isRootPath, setIsRootPath] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleMenuOpen = () => {
    setToggleMenu(true)
  }

  const handleMenuClose = () => {
    setToggleMenu(false)
  }

  useEffect(() => {
    const currentPath = window.location.pathname

    const pathToCheck = ['/', '/about/']

    if (pathToCheck.includes(currentPath)) {
      setIsRootPath(true)
    } else {
      setIsRootPath(false)
    }
  }, [])

  return (
    <header
      className={clsx(
        isRootPath ? 'fixed' : 'sticky',
        ' top-0 z-30 flex items-center justify-between w-full bg-white max-w-1920 border-b-1 h-60 px-15 sm:h-86 lg:px-40',
      )}
    >
      <Link to="/" aria-label="TELOS">
        <TelosLogo className="w-full h-36 sm:h-46" alt="Telos logo" />
      </Link>

      <HamburgerIcon
        onClick={handleMenuOpen}
        className="mr-[-5px] h-full w-38 sm:w-45 cursor-pointer stroke-[#C7C7C7]"
      />

      <Navbar open={toggleMenu} onClose={handleMenuClose} />
    </header>
  )
}

export default Header
