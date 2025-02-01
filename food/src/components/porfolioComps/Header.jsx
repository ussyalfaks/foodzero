import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { Menu, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative '>
      <div className=' py-4 fixed z-50 px-9 flex justify-between text-white  w-full bg-white/10 backdrop-blur-lg'>
        <div className='flex items-center gap-6'>
          <img src={Logo} alt="" className='w-36 h-auto' />
          <Menu className="text-white cursor-pointer" size={30} onClick={toggleMenu} />
        </div>
        <div className='flex items-center gap-4'>
          <p className='max-sm:hidden'>+81 66 280 639</p>
          <button className='border border-[#ffffff] px-3 py-3 rounded-lg'>Reservation</button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className='herobg  z-[1000] fixed top-20 left-0 right-0 flex justify-between px-12 items-end bg-cover bg-center py-9 text-white'
        
        >
          <ul className='flex flex-col z-30 gap-4 cursor-pointer font-semibold text-md md:text-2xl '>
            <li className=''><Link to="/">Home</Link></li>
            <li><Link to="/MenuPage">Menu</Link></li>
            <li className=' cursor-not-allowed' >Blogs</li>
            <li className=' cursor-not-allowed'>About</li>
            <li className=' cursor-not-allowed'>Contact</li>
          </ul>

          <div className=''>
            <h1 className='text-3xl border-b-2 border-dotted mb-2'>Contact</h1>
            <div className='space-y-4'>
              <div className=''>
                <p>+81 66 280 639</p>
                <p>info@foodzero.com</p>
              </div>
              <div>
                <p>1959 Mandau Street.</p>
                <p>United State, 89715</p>
              </div>
            </div>
            <div>
              <div className='flex gap-3 my-3 cursor-pointer'>
                <Facebook />
                <Twitter className='fill-white' />
                <MessageCircle />
                <Instagram />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#233000] -z-10 opacity-80"></div>
        </div>
      )}
    </div>
  );
};

export default Header;