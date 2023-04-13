import React from 'react'
import { Link } from 'gatsby'
import ItemCard from '../ItemCard'

type CustomLink = {
  isCardActive: boolean
  linkPath: string
  cardName: string
  children: React.ReactNode
}

const CustomLink = ({
  isCardActive,
  linkPath,
  cardName,
  children,
}: CustomLink) => {
  if (isCardActive) {
    return (
      <Link to={linkPath}>
        <ItemCard cardState={isCardActive} cardName={cardName}>
          {children}
        </ItemCard>
      </Link>
    )
  } else {
    return (
      <ItemCard cardState={isCardActive} cardName={cardName}>
        {children}
      </ItemCard>
    )
  }
}

export default CustomLink
