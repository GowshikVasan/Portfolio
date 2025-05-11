
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add observers for animations when elements enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.setAttribute('style', 'opacity: 1;');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Wait for a small delay to allow the page to render before observing elements
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-fade-in');
      animatedElements.forEach((el) => {
        el.setAttribute('style', 'opacity: 0;');
        observer.observe(el);
      });
    }, 100);

    // Add scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-purple-400 z-50';
    document.body.appendChild(progressBar);

    const updateProgressBar = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;
      progressBar.style.width = `${scrollPercentage}%`;
    };

    window.addEventListener('scroll', updateProgressBar);

    return () => {
      // Clean up animations and observers
      const animatedElements = document.querySelectorAll('.animate-fade-in');
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', updateProgressBar);
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2C] relative">
      {/* Particle background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#161B26]"></div>
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      <div>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
