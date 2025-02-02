import MenuHeroBg from '../../assets/menuHeroBg.png'
import PortfolioImage from '/image/portfolioImage.png';

const HeroMenu = () => {
  return (
    <>
    <div className="lg:h-56 w-full ">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{
          backgroundImage: `url(${PortfolioImage})`,
        }}
      />
     <div className="">
          <h1 className="text-white flex justify-center items-center h-screen text-4xl md:text-7xl font-serif text-center">
            Portfolio - Grid
          </h1>        
        </div>
        </div>
    
    </>
  )
}

export default HeroMenu