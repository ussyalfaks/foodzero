import Avocado from "../assets/Avocado.png" 
import DrinksImg from "../assets/DrinksImg.png" 






const PastriesDrinks = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
        <h1 className=" font-serif text-6xl md:text-7xl lg:text-8xl mt-8">Pastries & Drinks</h1>
        <p className=" text-center">
        This is a section of your menu. Give your section a brief description
        </p>
    </div>
    <div className="container relative mx-auto px-2 py-16 flex flex-col md:flex-row gap-8">
          <div className="absolute top-0 -right-10 w-64 h-64 opacity-50">
            <img 
            src={Avocado}
            alt="Avocado Img" 
            className="object-contain"
            
          />
     </div>
            <div className="w-full lg:w-[45%]">
        <img 
          src={DrinksImg}
          alt="Caprese Salad" 
          className="rounded-lg w-auto h-auto md:self-center"
        />
      </div>

      <div className="lg:w-1/2">
        <div className="relative">
          {/* Menu items */}
          <div className=" space-y-8 md:space-y-6  lg:space-y-16">
            <div className="border-b border-dotted border-gray-300 pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-serif lg:text-4xl lg:my-3">Grilled Okra and Tomatoes</h3>
                <span className="text-3xl">$20</span>
              </div>
              <p className="text-gray-600">
              A delicious combination of grilled okra and fresh tomatoes, seasoned with a
              blend of herbs and spices
              </p>
            </div>

            <div className="border-b border-dotted border-gray-300 pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-serif lg:text-4xl lg:my-5">Cucumber Salad</h3>
                <span className="text-3xl">$18</span>
              </div>
              <p className="text-gray-600">
              A refreshing cucumber salad made with sliced cucumbers, red onions, and a
              tangy vinaigrette dressing.              </p>
            </div>

            <div className="border-b border-dotted border-gray-300 pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-serif lg:text-4xl lg:my-5">Basil Pancakes</h3>
                <span className="text-3xl">$12</span>
              </div>
              <p className="text-gray-600">
                Soft and fluffy pancakes infused with fresh basil leaves, served with a
                drizzle of honey and a sprinkle of toasted pine nuts.
            </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    
    
    
    </>
  );
};

export default PastriesDrinks;