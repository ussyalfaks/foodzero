import React from 'react'
import BlogImg from "../../assets/HeroImage.png"

const HeroBlog = () => {
  return (
    <>
    <div className=" lg:h-56 w-full ">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{
          backgroundImage: ` url(${BlogImg})`,
        }}
      />
     <div className="sm:items-center md:flex flex-col justify-center items-center px-8 -z-10 py-52">
          <h1 className=" text-white text-7xl font-serif mb-6">
            Blogs - Two Columns
          </h1>
          <p className= " text-white text-xl font-light flex ">It is easy way to create your beautiful blog for daily
          </p>
        </div>
        </div>
    
    </>
  )
  
}

export default HeroBlog