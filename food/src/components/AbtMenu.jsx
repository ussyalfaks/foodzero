import aboutBg from '../assets/aboutBg.png'


const AbtMenu = () => {
  return (
    <>
      

        <div className=" h-56 w-full mb-12">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${aboutBg})`,
            }}
          />
         <div className="flex flex-col justify-center px-8 -z-10 py-52">
              <h1 className="text-white text-8xl font-serif mb-6 text-right mr-[200px] ">
               Who We Are
              </h1>
              <p className="text-white text-xl font-light ml-[600px]">
                The most important thing for us is to give you the <br />
                 comfortable dinner experience
              </p>
            </div>
            </div>
        
        </>
  )
}

export default AbtMenu