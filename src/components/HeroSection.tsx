
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/80 z-0"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-highlight/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px]"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20 z-0" 
           style={{ 
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
           }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="p-0.5">
                <div className="glassmorphism p-8 rounded-xl">
                  <p className="text-highlight font-medium mb-3 flex items-center">
                    Hello, I'm 
                    <span className="inline-block w-2 h-5 bg-highlight ml-2"></span>
                  </p>
                  <h2 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white">
                    Gowshik <span className="text-highlight">Vasan</span>
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
                    Aspiring <span className="text-highlight">Software Developer</span>
                  </h3>
                  <p className="text-lg md:text-xl mb-10 text-gray-300 font-light max-w-lg">
                    Passionate about Python, Machine Learning, and building intelligent systems that solve real-world problems.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <a href="#projects">
                      <Button className="bg-highlight hover:bg-blue-700 text-white px-6 py-6 rounded-md flex items-center shadow-lg">
                        View My Work <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </a>
                    <a href="https://drive.google.com/file/d/139yhM3Ge1Zk1mz0O5xhvvQNW2nFkl0H-/view?usp=sharing" target="_blank">
                      <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight hover:text-white px-6 py-6 rounded-md shadow-lg">
                        Download CV <Download size={18} className="ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-highlight/30 to-purple-500/30 mix-blend-overlay"></div>
                  <div className="p-0.5 rounded-full">
                    <div className="w-full h-full rounded-full overflow-hidden glassmorphism border-4 border-white/10">
                      <img 
                        src="/lovable-uploads/5a7ff5e7-6a15-408d-b14f-aa8182e82e60.png" 
                        alt="Gowshik Vasan" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Text box below profile picture has been removed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
