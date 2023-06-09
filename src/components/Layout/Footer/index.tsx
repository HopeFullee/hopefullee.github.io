import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap mx-auto bg-white max-w-1920 py-25 px-30 sm:py-30 md:flex-row sm:px-60 lg:py-42 md:px-80 lg:px-120 sm:justify-between border-t-1">
      <div className="all:text-c-gray-400 lg:all:text-18 break-keep">
        <div className="flex items-center gap-15">
          <p className="font-open-sans !text-c-orange-300 !font-extrabold !text-28 lg:!text-32">
            TELOS
          </p>
          <p className="mt-6">(주)텔로스</p>
        </div>

        <p className="flex gap-20 mt-10">
          <span>T. 063-714-4660</span>
          <span>F. 070-7500-6312</span>
        </p>
        <p>E. telos_inc@naver.com</p>
        <p className="mt-20">
          전라북도 전주시 완산구 팔달로 184, 4층 (관통빌딩)
        </p>
      </div>

      <div className="mt-40 md:mt-0 all:font-open-sans all:text-c-gray-400">
        <div className="flex flex-wrap items-center gap-20 font-bold text-18 lg:all:text-22">
          <a href="https://www.instagram.com/telos_official/" target="_blank">
            Instagram
          </a>
          <span className="w-2 h-22 bg-c-gray-300"></span>
          <a href="https://blog.naver.com/telos_official" target="_blank">
            Blog
          </a>
        </div>
        <p className="mt-20 font-light lg:text-18">
          Copyright, Telos Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
