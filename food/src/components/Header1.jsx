import { Menu } from 'lucide-react';
import MenuHeroBg from '../assets/menuHeroBg.png'
import Logo from '../assets/Logo.png';





const Header1 = () => {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MenuHeroBg})`,
        }}
      />

      {/* Header Content */}
      <div className="relative z-10 w-full h-full">
        <nav className="flex justify-between items-center px-8 py-6">
          {/* Logo */}
          <div className='flex items-center gap-6'>
          <img src={Logo} alt="" className='w-36 h-auto' />
          <Menu className="text-white" size={30} />
        </div>

          {/* Right Navigation Items */}
          <div className="flex items-center gap-8">
            <span className="text-white max-sm:hidden">+86 852 346 000</span>
            <button className='border text-white border-[#ffffff] px-3 py-3 rounded-lg'>Reservation</button>
          </div>
        </nav>

        {/* Main Header1 Content */}
        <div className="flex flex-col justify-center px-8 mt-32">
          <h1 className="text-white text-7xl font-serif mb-6">
            View Our <br />
            New Menu
          </h1>
          <p className="text-white text-xl font-light">
            The freshest ingredients for you every day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header1;