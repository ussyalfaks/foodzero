import ChefImage from '../assets/chef.png'; 
import Leaf from '../assets/Leaf.png'; 



const ExcellentCook = () => {
  return (
    <div className="bg-[#f5f5f0] min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="relative w-full lg:w-3/5">
            <div className="absolute -top-8 -left-8 transform -z-10 -rotate-45">
              <img src={Leaf} alt="" className='w-56' />
            </div>
            
            <img 
              src={ChefImage} 
              alt="Chef preparing salmon dish" 
              className="w-full"
            />
          </div>

          <div className="w-full lg:w-2/5 space-y-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-wide">
              Excellent
              <br />
              cook
            </h2>
            <p className="text-gray-600 text-lg">
            Discover a world of flavors and culinary delight. From classic recipes 
            to innovative dishes, each meal is crafted with precision and passion, 
            bringing joy to every bite.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 transform rotate-6">
        <img src={Leaf} alt="" className='w-56' />

      </div>
    </div>
  );
};

export default ExcellentCook;