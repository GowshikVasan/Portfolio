
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Gamepad, MousePointer, BarChart2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  icon?: React.ReactNode;
}

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const projects: Project[] = [
    {
      title: "Plant Disease Detection",
      description: "Deep learning model using Python to detect plant infections and provide treatment recommendations for farmers.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      image: "/lovable-uploads/e85e1c48-cb19-4c9b-a9ad-66e58f7bbc75.png",
      icon: <Code size={24} className="text-green-500" />
    },
    {
      title: "Nibbles Game",
      description: "Classic Snake game implemented using Python and Pygame with modern UI and additional game mechanics.",
      technologies: ["Python", "Pygame", "Object-Oriented Programming"],
      image: "/lovable-uploads/903d0aea-1d29-4de4-af7e-9e642aec88e7.png",
      icon: <Gamepad size={24} className="text-blue-500" />
    },
    {
      title: "Virtual Mouse",
      description: "Gesture-controlled mouse using OpenCV and Mediapipe that allows users to control their computer with hand movements.",
      technologies: ["Python", "OpenCV", "Mediapipe", "PyAutoGUI"],
      image: "/lovable-uploads/89ca6c74-f488-4ad5-ab99-8c0697ee8375.png",
      icon: <MousePointer size={24} className="text-purple-500" />
    },
    {
      title: "IPL Score Prediction",
      description: "Machine learning model to predict cricket match scores using regression techniques based on historical data.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "Data Analysis"],
      image: "/lovable-uploads/2ef69b22-c4ae-4cdb-b1da-a1615081db65.png",
      icon: <BarChart2 size={24} className="text-orange-500" />
    }
  ];

  useEffect(() => {
    // Initialize refs array
    projectRefs.current = projectRefs.current.slice(0, projects.length);
    
    // Add tilt effect
    const handleMouseMove = (e: MouseEvent, index: number) => {
      const card = projectRefs.current[index];
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleY = (x - centerX) / 20;
      const angleX = (centerY - y) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Add highlight effect
      const shine = card.querySelector('.card-shine') as HTMLElement;
      if (shine) {
        shine.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)`;
      }
    };
    
    const handleMouseLeave = (index: number) => {
      const card = projectRefs.current[index];
      if (!card) return;
      
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      
      const shine = card.querySelector('.card-shine') as HTMLElement;
      if (shine) {
        shine.style.backgroundImage = 'none';
      }
    };
    
    // Add event listeners
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.addEventListener('mousemove', (e) => handleMouseMove(e, index));
        ref.addEventListener('mouseleave', () => handleMouseLeave(index));
      }
    });
    
    // Clean up
    return () => {
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.removeEventListener('mousemove', (e) => handleMouseMove(e, index));
          ref.removeEventListener('mouseleave', () => handleMouseLeave(index));
        }
      });
    };
  }, [projects.length]);

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1920&q=60")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/90 z-0"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract shapes */}
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-highlight/5 filter blur-[80px]"></div>
        <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-purple-500/5 filter blur-[100px]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233e93e6' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
             }}
        ></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">My <span className="text-highlight">Projects</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="animate-fade-in opacity-0 project-card"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              ref={(el) => (projectRefs.current[index] = el)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-secondary/50 border-white/5 shadow-xl backdrop-blur-sm relative">
                {/* Shine effect overlay */}
                <div className="card-shine absolute inset-0 w-full h-full z-10 pointer-events-none"></div>
                
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f172a]/80 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover project-card-image"
                  />
                  {project.icon && (
                    <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md p-1.5 rounded-full shadow-md z-20">
                      {project.icon}
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="font-poppins text-white">
                    {project.title}
                    {activeIndex === index && (
                      <div className="inline-block w-1 h-5 ml-1 bg-highlight animate-pulse"></div>
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="highlight" className="bg-white/10 text-gray-200 hover:bg-highlight/20">{tech}</Badge>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
