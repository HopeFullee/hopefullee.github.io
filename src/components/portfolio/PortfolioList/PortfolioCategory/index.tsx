import React from 'react'
import CategoryButton from './CategoryButton'
import { useSetRecoilState } from 'recoil'
import { portfolioItemCountStateAtom } from 'store/storePortfolioItemCount'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: Record<string, number>
  itemClickCallback: Function
}

const PortfolioCategory = ({
  selectedCategory,
  categoryList,
  itemClickCallback,
}: CategoryListProps) => {
  const setPortfolioItemCountState = useSetRecoilState(
    portfolioItemCountStateAtom,
  )

  const handleCategoryItemClick = (name: string) => {
    // 클릭한 카테고리의 이름으로 /pages/portfolio에 선언한 Recoil 변수에 저장
    itemClickCallback(name)

    // 클릭한 카테고의 이름으로 쿼리스트링 재설정
    history.pushState(null, '', `?category=${name}`)

    // 카테고리 클릭 시 리스트 더보기 Recoil 전역 변수 초기화
    setPortfolioItemCountState(1)
  }

  return (
    <div className="flex-wrap flex-center gap-15 md:gap-20 sm:text-18 md:text-20 lg:text-22 text-c-black-300 under:py-6 under:px-15 md:under:py-8 md:under:px-25 under:rounded-full">
      {Object.entries(categoryList).map(([name]) => {
        return (
          <CategoryButton
            onClick={() => handleCategoryItemClick(name)}
            active={name === selectedCategory}
            key={name}
          >
            <span>{name}</span>
          </CategoryButton>
        )
      })}
    </div>
  )
}

export default PortfolioCategory
