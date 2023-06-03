import React from 'react'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  active: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const CategoryButton = ({ children, onClick, active }: Props) => {
  return (
    <button
      className={clsx(
        active
          ? 'bg-c-orange-300 text-white font-semibold'
          : 'bg-white text-c-orange-300 font-medium',
        'border-1 border-c-orange-300',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CategoryButton
