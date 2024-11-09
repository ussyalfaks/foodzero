import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Menuimg from '../assets/menuimg.png';

const MenuItem = ({ price, title, description }) => (
  <div className="relative my-12">
    <div className="border-b border-dotted border-gray-400">
      <span className="absolute right-0 bg-white pr-2 text-2xl">${price}</span>
      <h2 className="text-3xl font-serif mb-2 pr-20">{title}</h2>
    </div>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

MenuItem.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const RestaurantMenu = () => {
  const menuItems = [
    {
      price: "20",
      title: "Deep Sea Snow White Cod Fillet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      price: "22",
      title: "Steak With Rosemary Butter",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      price: "18",
      title: "Cucumber Salad",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      price: "90",
      title: "Natural Wine Pairing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <div className="max-w-8xl mx-auto my-5 px-6 py-12 relative">
      <div className="absolute top-0 right-0  w-2/6 h-64 opacity-50">
        <img 
          src={Menuimg} 
          alt="Decorative leaves" 
          className="object-contain"
        />
      </div>
      
      <h1 className="text-5xl font-serif mb-9">Our Menu</h1>
      <p className="text-gray-600 mb-12">This is a section of your menu. Give your section a brief description</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))}
        
      </div>
      <div className='flex justify-end'>
          <button className=' bg-lime-700 text-white px-6 py-2 rounded-md'><Link to="/MenuPage">More</Link></button>
        </div>
    </div>
  );
};

export default RestaurantMenu;