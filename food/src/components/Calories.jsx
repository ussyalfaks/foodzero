import Caloriesimg from '../assets/Caloriesimg.png'
import Caloriesimg1 from '../assets/Caloriesimg1.png'
import Caloriesimg2 from '../assets/Caloriesimg2.png'



function CaloriesEnergyBalance() {
  return (
    <div className="flex flex-col items-center bg-white py-10 px-4">
      <h1 className="text-4xl font-bold mb-2 font-serif text-center">Calories Energy Balance</h1>
      <p className="text-gray-500 mb-8 text-center">Discover the perfect balance of flavors and energy with our delicious meals.</p>
      <div className="flex flex-col  md:flex-row">
        <div className="w-auto h-auto relative m-9 md:m-12  overflow-hidden rounded-lg shadow-lg">
          <img 
            src={Caloriesimg} 
            alt="Starters" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 text-green-800 text-xl font-medium">Starters</div>
          <div className="absolute top-4 right-4 text-green-800 text-2xl font-bold">→</div>
        </div>
        
        <div className="w-auto h-auto relative m-9 md:m-12  overflow-hidden rounded-lg shadow-lg">
          <img 
            src={Caloriesimg1} 
            alt="Mains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 text-green-800 text-xl font-medium">Mains</div>
          <div className="absolute top-4 right-4 text-green-800 text-2xl font-bold">→</div>
        </div>
        
        <div className="w-auto h-auto relative m-9 md:m-12  overflow-hidden rounded-lg shadow-lg">
          <img 
            src={Caloriesimg2} 
            alt="Soups" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 text-green-800 text-xl font-medium">Soups</div>
          <div className="absolute top-4 right-4 text-green-800 text-2xl font-bold">→</div>
        </div>
      </div>
    </div>
  );
}

export default CaloriesEnergyBalance;
