import React from 'react'
import sideImage01 from 'assets/images/inhouse/rundit/rundit_application_item_01.png'
import sideImage02 from 'assets/images/inhouse/rundit/rundit_application_item_02.png'
import sideImage03 from 'assets/images/inhouse/rundit/rundit_application_item_03.png'

const SideImages = () => {
  return (
    <ul className="flex flex-col justify-center w-full lg:flex-row max-w-440 lg:max-w-1000 gap-30 lg:gap-65">
      <li className="flex flex-col gap-30 lg:gap-65">
        <img src={sideImage01} alt="간식 타임은 팅클랜드와 함께" />
        <img src={sideImage02} alt="자주하는 질문 FAQ" />
      </li>
      <li className="flex flex-col justify-end gap-30 lg:gap-65">
        <img src={sideImage03} alt="처음 접하는 아이들도 맛있게 즐길 수 있게" />
      </li>
    </ul>
  )
}

export default SideImages
