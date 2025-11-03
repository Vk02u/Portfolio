import React from 'react';

const Home = () => {
  // Home component for portfolio
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="gradient-text">Vivek</span></h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300">Full Stack Developer</h2>
          <p className="text-lg mb-8 text-slate-400 max-w-lg">
          I build fast, responsive, and user-friendly web applications using modern frontend and backend technologies. From crafting engaging interfaces to building powerful Python-based backends, I love turning ideas into real-world digital solutions.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-full btn-primary font-medium"
            >
              Hire Me
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
            >
              View Work
            </button>
          </div>
          <div className="flex mt-8 space-x-4">
            <a href="https://github.com/Vk02u/" target="_blank" rel="noopener noreferrer" className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary">
  <i className="fab fa-github"></i>
</a>
            <a href="https://www.linkedin.com/in/vivek-kansal-a71443271/" target="_blank" rel="noopener noreferrer" className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600">
  <i className="fab fa-linkedin-in"></i>
</a>
            <a href="https://www.hackerrank.com/profile/vk2003" target="_blank" rel="noopener noreferrer" className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-green-600">
  <i className="fab fa-hackerrank"></i>
</a>
            <a href="https://leetcode.com/u/vk2003/" target="_blank" rel="noopener noreferrer" className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-amber-500">
  <i className="fas fa-code"></i>
</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
            <img 
              src="Images/vivek1.jpeg" 
              alt="Profile" 
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 floating"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
