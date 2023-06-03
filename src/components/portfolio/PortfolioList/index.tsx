import React from 'react'
import PortfolioCategory, { CategoryListProps } from './PortfolioCategory'
import PortfolioItem from './PortfolioItem'
import useMorePortfolioItems from 'hooks/useMorePortfolioItems'
import moreButton from 'assets/images/portfolio/more_button.svg'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
} & CategoryListProps

const PortfolioList = ({ posts, selectedCategory, ...rest }: PostListProps) => {
  const { postList, more, isEnd } = useMorePortfolioItems(
    selectedCategory,
    posts,
  )

  return (
    <section className="mx-auto px-30 sm:px-60">
      <PortfolioCategory selectedCategory={selectedCategory} {...rest} />
      <div className="grid mt-45 sm:grid-cols-2 lg:grid-cols-3 sm:mt-60 md:mt-70 lg:mt-80 gap-30 sm:gap-45">
        {postList.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }) => {
            return <PortfolioItem {...frontmatter} link={slug} key={id} />
          },
        )}
      </div>
      <div className="flex justify-center mt-70 md:mt-110">
        {!isEnd && (
          <button
            className="mb-50 all:w-full all:h-70 all:sm:h-80 all:md:h-100"
            onClick={() => more()}
          >
            <img src={moreButton} alt="" />
          </button>
        )}
      </div>
    </section>
  )
}

export default PortfolioList
