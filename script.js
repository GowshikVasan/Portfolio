
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  const navbar = document.getElementById('navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const progressBar = document.querySelector('.progress-bar');
  const scrollToTopBtn = document.getElementById('scrollToTop');
  const skillBars = document.querySelectorAll('.skill-progress');
  const animatedElements = document.querySelectorAll('.animate-fade-in');
  const contactForm = document.getElementById('contactForm');
  const currentYearElement = document.getElementById('currentYear');

  // Set current year in footer
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Navbar scroll effect
  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Update progress bar
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  }
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
  
  // Scroll to top button
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Toast notification system
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
  
  // Handle contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('.submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      
      // Disable submit button and show loading state
      submitBtn.disabled = true;
      btnText.textContent = 'Sending...';
      
      // Simulate form submission (would be replaced with actual API call)
      setTimeout(() => {
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        showToast('Message sent! Thank you for reaching out.');
      }, 1500);
    });
    
    // Form field focus effects
    const formFields = document.querySelectorAll('.form-field');
    formFields.forEach(field => {
      const input = field.querySelector('input, textarea');
      if (input) {
        input.addEventListener('focus', () => {
          field.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
          field.classList.remove('focused');
        });
      }
    });
  }
  
  // Create 3D tilt effect for project cards
  const projectCards = document.querySelectorAll('.project-card-inner');
  projectCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleY = (x - centerX) / 20;
      const angleX = (centerY - y) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Add highlight effect
      const shine = card.querySelector('.card-shine');
      if (shine) {
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)`;
      }
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      
      const shine = card.querySelector('.card-shine');
      if (shine) {
        shine.style.background = 'none';
      }
    });
  });
  
  // Create particles for skills section
  const particlesContainer = document.querySelector('.particles-container');
  if (particlesContainer) {
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 60 + 20;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.opacity = '0.4';
      
      particlesContainer.appendChild(particle);
    }
  }
  
  // Create blobs for contact section
  const contactSection = document.querySelector('.contact-section');
  if (contactSection) {
    function createBlob() {
      const blob = document.createElement('div');
      blob.classList.add('blob');
      
      const size = Math.random() * 300 + 200;
      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;
      blob.style.left = `${Math.random() * 70}%`;
      blob.style.top = `${Math.random() * 70}%`;
      
      contactSection.appendChild(blob);
      
      setTimeout(() => {
        if (blob.parentNode === contactSection) {
          contactSection.removeChild(blob);
        }
      }, 15000);
    }
    
    // Create initial blobs
    for (let i = 0; i < 3; i++) {
      createBlob();
    }
    
    // Create new blobs periodically
    setInterval(createBlob, 5000);
  }
  
  // Create stars in footer
  const starsContainer = document.querySelector('.stars-container');
  if (starsContainer) {
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      star.style.animation = `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite alternate`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      starsContainer.appendChild(star);
    }
  }
  
  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Initialize skill bars when visible
          if (entry.target.classList.contains('skill-progress')) {
            const level = entry.target.getAttribute('data-level');
            entry.target.style.width = `${level}%`;
          }
          
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  
  // Observe all animated elements
  animatedElements.forEach((el) => {
    // Set initial delay from data attribute
    const delay = el.getAttribute('data-delay') || '0';
    el.style.transitionDelay = `${delay}s`;
    observer.observe(el);
  });
  
  // Observe skill bars
  skillBars.forEach((el) => {
    observer.observe(el);
  });
  
  // Observe timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((el, index) => {
    el.style.transitionDelay = `${0.2 * index}s`;
    observer.observe(el);
  });
  
  // Add parallax effect to about section
  const aboutSection = document.querySelector('.about-section');
  if (aboutSection) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const sectionOffset = aboutSection.offsetTop;
      const sectionHeight = aboutSection.offsetHeight;
      
      // Check if section is in view
      if (scrollTop + window.innerHeight > sectionOffset && 
          scrollTop < sectionOffset + sectionHeight) {
        // Calculate parallax effect
        const yPos = (scrollTop - sectionOffset) * 0.15;
        
        // Apply to background elements
        const bg1 = aboutSection.querySelector('.bg-element-1');
        const bg2 = aboutSection.querySelector('.bg-element-2');
        
        if (bg1) bg1.style.transform = `translateY(${yPos}px)`;
        if (bg2) bg2.style.transform = `translateY(${-yPos}px)`;
      }
    });
  }
});
