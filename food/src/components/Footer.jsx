import { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
  };

  return (
    <footer className="bg-[#233000] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div>
          <img src={Logo} alt="" className='w-36 h-auto' />

          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-serif mb-6">Contact</h2>
            <div className="space-y-2">
              <p>+1+86 852 346 000</p>
              <p>info@foodzero.com</p>
              <div className="mt-4">
                <p>1959 Sepulveda Blvd.</p>
                <p>Culver City, CA, 90230</p>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div>
            <h2 className="text-2xl font-serif mb-6">Never Miss a Recipe</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-transparent border border-white px-4 py-2 text-white placeholder-white"
                required
              />
              <p className="text-sm">Join our subscribers and get best recipe delivered each week!</p>
              <button
                type="submit"
                className="bg-[#495E1E] hover:bg-[#557023] px-8 py-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-dashed border-white/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© 2020 Zero Inc. All rights Reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;