import React from 'react'
import runditGrid from 'assets/images/inhouse/rundit/rundit_grid_system.png'

const RunditGrid = () => {
  return (
    <section className="relative pt-40 bg-white sm:pt-50 lg:pt-100">
      <span className="absolute left-30 sm:left-50 lg:left-150 top-[15%] lg:top-[20%] text-14 sm:text-18 lg:text-20 text-[#0B0B0B] font-open-sans font-bold">
        LOGO GRID SYSTEM
      </span>
      <img
        src={runditGrid}
        alt="Rundit 로고 그리드"
        className="object-cover h-auto min-h-360 sm:min-h-600 lg:max-h-auto"
      />
    </section>
  )
}

export default RunditGrid
