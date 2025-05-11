
import React from 'react';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 92 },
    { name: 'Java', level: 75 },
    { name: 'MySQL', level: 85 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'JavaScript', level: 70 },
    { name: 'Git', level: 75 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Deep Learning', level: 75 }
  ];

  const techBadges = [
    'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Flask',
    'Pandas', 'NumPy', 'MongoDB', 'React', 'Node.js'
  ];

  return (
    <section id="skills" className="py-24 bg-[#121e33] relative overflow-hidden">
      {/* 3D Floating Particles Background */}
      <div className="absolute inset-0 z-0">
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-highlight/20 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">My <span className="text-highlight">Skills</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="animate-fade-in opacity-0 glassmorphism p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-highlight/20"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-white text-lg">{skill.name}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-highlight rounded-full relative" 
                  style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-out' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight/80 via-highlight to-highlight/80 blur-sm"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center text-white">Technologies I've Worked With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techBadges.map((tech, index) => (
              <TechBadge key={tech} name={tech} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechBadge = ({ name, delay }: { name: string; delay: number }) => {
  return (
    <div 
      className="glassmorphism px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:translate-y-[-5px] animate-fade-in opacity-0" 
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="font-medium text-white">{name}</span>
    </div>
  );
};

export default SkillsSection;
