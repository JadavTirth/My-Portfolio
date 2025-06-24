
export const initScrollReveal = () => {
  const revealer = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  };

  window.addEventListener('scroll', revealer);
  
  // Call the function once on initial load
  setTimeout(revealer, 100);
  
  return () => {
    window.removeEventListener('scroll', revealer);
  };
};
