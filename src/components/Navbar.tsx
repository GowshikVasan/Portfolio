import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Add nav item hover effect
    const navItems = navRef.current?.querySelectorAll('a');
    navItems?.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const indicator = document.createElement('div');
        indicator.className = 'nav-indicator';
        indicator.style.position = 'absolute';
        indicator.style.bottom = '-2px';
        indicator.style.left = '0';
        indicator.style.width = '100%';
        indicator.style.height = '2px';
        indicator.style.background = 'var(--highlight)';
        indicator.style.transform = 'scaleX(0)';
        indicator.style.transition = 'transform 0.2s ease-in-out';
        indicator.style.transformOrigin = 'left';
        
        // Use HTMLElement instead of Element to fix TypeScript error
        if (item instanceof HTMLElement) {
          item.style.position = 'relative';
          item.appendChild(indicator);
        }
        
        // Animate in
        setTimeout(() => {
          indicator.style.transform = 'scaleX(1)';
        }, 10);
      });
      
      item.addEventListener('mouseleave', () => {
        const indicator = item.querySelector('.nav-indicator');
        if (indicator && indicator instanceof HTMLElement) {
          indicator.style.transform = 'scaleX(0)';
          indicator.style.transformOrigin = 'right';
          
          // Remove after animation
          indicator.addEventListener('transitionend', () => {
            if (indicator.parentNode === item) {
              item.removeChild(indicator);
            }
          });
        }
      });
    });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-lg bg-[#0f172a]/90 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative mr-3">
            <div className="absolute inset-0 bg-highlight/20 rounded-full blur-md animate-pulse"></div>
            <Code className="text-highlight relative z-10" size={24} />
          </div>
          <h1 className="font-poppins font-bold text-xl md:text-2xl text-white">
            Gowshik <span className="text-highlight glow-text">Vasan</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="font-medium text-gray-300 hover:text-white transition-colors relative py-1"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-white focus:outline-none p-2 glassmorphism rounded-lg"
          aria-label="Toggle mobile menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0f172a]/95 backdrop-blur-xl py-4 px-4 animate-fade-in z-50">
          <div className="flex flex-col space-y-4 h-full items-center justify-center">
            <div className="mb-8">
              <button 
                onClick={toggleMobileMenu}
                className="text-white text-3xl"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <a 
                key={item}
                href={`#${item}`} 
                className="font-medium text-gray-300 hover:text-white transition-colors px-4 py-2 text-xl glassmorphism rounded-lg w-full text-center" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
