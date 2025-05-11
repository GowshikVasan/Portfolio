
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  useEffect(() => {
    // Create blob animation
    const createBlob = () => {
      if (!sectionRef.current) return;
      
      const blob = document.createElement('div');
      blob.classList.add('blob');
      blob.style.width = `${Math.random() * 300 + 200}px`;
      blob.style.height = `${Math.random() * 300 + 200}px`;
      blob.style.left = `${Math.random() * 70}%`;
      blob.style.top = `${Math.random() * 70}%`;
      blob.style.opacity = '0.3';
      
      sectionRef.current.appendChild(blob);
      
      setTimeout(() => {
        if (blob.parentNode === sectionRef.current) {
          sectionRef.current.removeChild(blob);
        }
      }, 15000);
    };
    
    // Create initial blobs
    for (let i = 0; i < 3; i++) {
      createBlob();
    }
    
    // Create new blobs periodically
    const interval = setInterval(createBlob, 5000);
    
    // Input focus effects
    const inputs = formRef.current?.querySelectorAll('input, textarea');
    inputs?.forEach(input => {
      input.addEventListener('focus', () => {
        (input as HTMLElement).closest('.form-field')?.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        (input as HTMLElement).closest('.form-field')?.classList.remove('focused');
      });
    });
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-[#121e33] relative overflow-hidden" ref={sectionRef}>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233182ce' fill-opacity='0.2'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title glow-text">Get In <span className="text-highlight">Touch</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 font-poppins text-white relative inline-block">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-highlight"></span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center glassmorphism p-6 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-highlight/20 flex items-center justify-center mr-6 relative">
                  <Phone className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium text-white">+91 9566408960</p>
                </div>
              </div>
              
              <div className="flex items-center glassmorphism p-6 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-highlight/20 flex items-center justify-center mr-6 relative">
                  <Mail className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium text-white">gowshikvasan2000@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center glassmorphism p-6 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-highlight/20 flex items-center justify-center mr-6 relative">
                  <Linkedin className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://linkedin.com/in/" className="font-medium text-highlight hover:underline" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/gowshikvasan
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in opacity-0 p-0.5 rounded-xl" style={{ animationDelay: '0.4s' }}>
            <div className="glassmorphism p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                <div className="form-field relative">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 transition-all focus:ring-2 focus:ring-highlight/50 focus:border-highlight"
                  />
                  <div className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-highlight to-purple-500 rounded-full transform scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
                </div>
                
                <div className="form-field relative">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 transition-all focus:ring-2 focus:ring-highlight/50 focus:border-highlight"
                  />
                </div>
                
                <div className="form-field relative">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="w-full min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 transition-all focus:ring-2 focus:ring-highlight/50 focus:border-highlight resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-highlight hover:bg-blue-700 text-white py-6 flex items-center justify-center gap-2 rounded-lg shadow-xl transition-all duration-300 hover:shadow-highlight/30"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
