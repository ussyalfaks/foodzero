
import MenuHeroBg from '../assets/MenuHeroBg.png'


const HeroContact = () => {
  return (
    
        <div className=" h-56 w-full mb-12">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MenuHeroBg})`,
                }}
              />
             <div className="flex flex-col justify-center px-8 -z-10 py-52">
                  <h1 className="text-white text-7xl font-serif mb-6">
                  Get in Touch
                  </h1>
                  <p className="text-white text-xl font-light">
                    The freshest ingredients for you every day
                  </p>
                </div>
        </div>

  )
}

export default HeroContact