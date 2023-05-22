import React from 'react'
import { Link } from 'gatsby'

const MainContact = () => {
  return (
    <section className="mx-auto my-120 sm:my-150 lg:my-180 max-w-1600">
      <Link to="/contact">
        <article className="flex-center flex-col bg-[url('assets/images/main/main_contact.png')] text-center px-30 w-full min-h-180 sm:min-h-220 lg:min-h-260">
          <h6 className="font-bold text-white leading-[1] sm:leading-normal font-open-sans text-40 sm:text-50 lg:text-56">
            contact us
          </h6>
          <p className="mt-10 font-medium text-white sm:mt-none text-18 sm:text-20 lg:text-22">
            비즈니스의 시작, (주)텔로스와 함께 하세요!
          </p>
        </article>
      </Link>
    </section>
  )
}

export default MainContact
