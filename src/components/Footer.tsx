
import React, { useEffect, useRef } from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Create stars effect
    const createStars = () => {
      if (!footerRef.current) return;
      
      const starsContainer = document.createElement('div');
      starsContainer.className = 'stars-container absolute inset-0 overflow-hidden';
      footerRef.current.appendChild(starsContainer);
      
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;
        
        star.className = 'absolute rounded-full bg-white';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        star.style.animation = `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite alternate`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
      }
      
      return () => {
        if (footerRef.current && starsContainer.parentNode === footerRef.current) {
          footerRef.current.removeChild(starsContainer);
        }
      };
    };
    
    createStars();
    
    // Add keyframe animation for twinkling stars
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes twinkle {
        0% { opacity: 0.3; transform: scale(1); }
        100% { opacity: 0.8; transform: scale(1.3); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1F2C] text-white py-12 relative overflow-hidden" ref={footerRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-[#1A1F2C] to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 glassmorphism p-4 rounded-xl">
            <h3 className="text-2xl font-bold font-poppins mb-2">Gowshik <span className="text-purple-400">Vasan</span></h3>
            <p className="text-gray-300">MCA Graduate, VIT University</p>
          </div>
          
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors p-3 glassmorphism rounded-full transform hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:gowshikvasan2000@gmail.com" className="hover:text-purple-400 transition-colors p-3 glassmorphism rounded-full transform hover:scale-110 transition-transform">
              <Mail size={24} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 moving-gradient rounded-full hover:scale-110 transition-transform shadow-purple-400/20 relative overflow-hidden"
            aria-label="Scroll to top"
          >
            <div className="animate-ping absolute inset-0 bg-purple-400/20 rounded-full"></div>
            <ArrowUp size={20} className="relative z-10" />
          </button>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Gowshik Vasan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
