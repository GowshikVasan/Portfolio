
import React, { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([null, null]);
  
  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollTop = window.pageYOffset;
      const sectionOffset = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Check if section is in view
      if (scrollTop + window.innerHeight > sectionOffset && 
          scrollTop < sectionOffset + sectionHeight) {
        // Calculate parallax effect
        const yPos = (scrollTop - sectionOffset) * 0.15;
        
        // Apply to background elements
        const bg1 = sectionRef.current.querySelector('.bg-element-1') as HTMLElement;
        const bg2 = sectionRef.current.querySelector('.bg-element-2') as HTMLElement;
        
        if (bg1) bg1.style.transform = `translateY(${yPos}px)`;
        if (bg2) bg2.style.transform = `translateY(${-yPos}px)`;
      }
    };
    
    // Timeline animation
    const handleTimelineAnimation = () => {
      timelineRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        
        if (isInView) {
          ref.classList.add('animate-fade-in');
          ref.style.opacity = '1';
          ref.style.transform = 'translateY(0)';
          ref.style.transitionDelay = `${0.2 * index}s`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleTimelineAnimation);
    
    // Initial check
    handleScroll();
    handleTimelineAnimation();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleTimelineAnimation);
    };
  }, []);

  return (
    <section 
      id="about" 
      className="py-24 bg-[#0f172a] relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="bg-element-1 absolute left-0 top-0 w-96 h-96 bg-highlight/5 rounded-full filter blur-[120px]"></div>
        <div className="bg-element-2 absolute right-0 bottom-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-[100px]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z' fill='%233182ce' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
             }}
        ></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">About <span className="text-highlight">Me</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in opacity-0 glassmorphism p-8 rounded-xl card-3d" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              I'm Gowshik from Vellore. I recently completed my master's in computer applications from VIT University, and my bachelor's from Vels University. I have a strong foundation in Python, Java, machine learning, and more.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Through semester-long academic projects, I've developed hands-on skills in deep learning, teamwork, and applying theory to real-world problems. I'm passionate about solving complex challenges and continuously expanding my knowledge in software development and artificial intelligence.
            </p>
            
            {/* 3D Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-highlight/40 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-500/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-8 font-poppins text-white relative inline-block">
              Education
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-highlight"></span>
            </h3>
            
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-highlight via-highlight/50 to-transparent"></div>
              
              <div 
                className="flex glassmorphism p-6 rounded-xl transform-hover opacity-0"
                style={{ transform: 'translateY(20px)' }}
                ref={(el) => (timelineRefs.current[0] = el)}
              >
                <div className="flex-shrink-0 mt-1 relative">
                  <div className="h-12 w-12 rounded-full bg-highlight/20 flex items-center justify-center relative z-10">
                    <GraduationCap className="h-6 w-6 text-highlight" />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-highlight/30 animate-ping opacity-75"></div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-white">Master of Computer Applications</h4>
                  <p className="text-gray-300">VIT University</p>
                  <p className="text-gray-400">2022 - 2024</p>
                </div>
              </div>
              
              <div 
                className="flex glassmorphism p-6 rounded-xl transform-hover opacity-0"
                style={{ transform: 'translateY(20px)' }}
                ref={(el) => (timelineRefs.current[1] = el)}
              >
                <div className="flex-shrink-0 mt-1 relative">
                  <div className="h-12 w-12 rounded-full bg-highlight/20 flex items-center justify-center relative z-10">
                    <GraduationCap className="h-6 w-6 text-highlight" />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-highlight/30 animate-ping opacity-75"></div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-white">Bachelor of Computer Applications</h4>
                  <p className="text-gray-300">Vels University</p>
                  <p className="text-gray-400">2019 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
