import React from 'react'

type TemplateDescription = {
  title: string
  categories: string
  description: string
}

const TemplateDescription = ({
  title,
  categories,
  description,
}: TemplateDescription) => {
  return (
    <section className="w-full mx-auto bg-white max-w-1920">
      <article className="flex-center px-30 min-h-450 sm:min-h-500 py-50">
        <div className="flex-col w-full gap-20 flex-center md:items-start md:flex-row sm:gap-30 md:gap-0">
          <div className="md:w-[45%] flex-center flex-col">
            <div>
              <p className="text-c-gray-400 text-15 sm:text-16 lg:text-20 md:text-left">
                {categories}
              </p>
              <h4 className="font-bold text-32 sm:text-40 lg:text-50">
                {title}
              </h4>
            </div>
          </div>
          <div className="md:w-[55%] flex flex-col gap-30">
            <p className="leading-relaxed text-center sm:leading-loose md:text-left lg:ml-60 sm:text-17 lg:text-18 text-c-gray-400 max-w-650 break-keep">
              {description}
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default TemplateDescription
