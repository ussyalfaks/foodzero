import MenuHeroBg from '../../assets/menuHeroBg.png'
import PortfolioImage from '/image/portfolioImage.png';

const HeroMenu = () => {
  return (
    <>
    <div className=" h-56 w-full ">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${PortfolioImage})`,
        }}
      />
     <div className="flex justify-center px-8 -z-10 py-52">
          <h1 className="text-white text-7xl font-serif text-center">
            Portfolio - Grid
          </h1>        
        </div>
        </div>
    
    </>
  )
}

export default HeroMenu