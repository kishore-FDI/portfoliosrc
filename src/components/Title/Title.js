import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont text-black items-center right-[1/2] mx-auto text-center max-w-prose">
      <h3 className="text-3xl font-light tracking-wide flex  ">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title