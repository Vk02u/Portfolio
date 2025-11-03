import React from 'react';

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const experiences = [
    {
      title: "Information Technology Student",
      company: "GNIOT College",
      period: "2021 - 2025",
      description: "Pursuing degree in Information Technology with focus on web development, data structures, and software engineering principles. Built multiple projects using modern technologies."
    },
    {
      title: "Self-Taught Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      description: "Learned full-stack development through online courses and hands-on projects. Built responsive websites, REST APIs, and database-driven applications using React, Node.js, and Python."
    },
    {
      title: "Freelance Projects",
      company: "Various Clients",
      period: "2025 - Present",
      description: "Completed small-scale web development projects for local businesses. Created responsive websites, implemented user interfaces, integrated backend services, and worked with databases for data storage and management."
    }
  ];

  return (
    <section id="about" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
              <img 
  src="/VIVEK_IMAGE.png" 
  alt="Vivek Kansal" 
  className="relative w-full h-full object-cover rounded-2xl border-4 border-slate-800"
/>

            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
            <p className="text-slate-400 mb-6">
              I'm a passionate Information Technology student and aspiring Full Stack Developer with a strong foundation in modern web technologies. I specialize in JavaScript, React, and Python-based backends, and I love building responsive and user-friendly web applications. As a fresher, I'm eager to apply my skills in real-world projects and continue learning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Name: <span className="text-slate-300">Vivek Kansal</span></h4>
                <h4 className="font-semibold mb-2">Email: <span className="text-slate-300">vivekkansalvkvk@gmail.com</span></h4>
                <h4 className="font-semibold mb-2">Phone: <span className="text-slate-300">+91 9548274118</span></h4>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Age: <span className="text-slate-300">22</span></h4>
                <h4 className="font-semibold mb-2">Experience: <span className="text-slate-300">Fresher (B.Tech 2025)</span></h4>
                <h4 className="font-semibold mb-2">Location: <span className="text-slate-300">Gulaothi, Bulandshahr, India</span></h4>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="/Vivek_Kansal_Resume.pdf" 
                download
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full btn-primary font-medium inline-block"
              >
                Download CV
              </a>

              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        
        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">My <span className="gradient-text">Experience</span></h3>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 h-full w-0.5 bg-slate-700 transform -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-8 flex justify-between items-center w-full timeline-item ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              >
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-4 py-4 bg-slate-800 rounded-lg shadow-lg">
                  <h4 className="text-lg font-bold mb-2">{exp.title}</h4>
                  <p className="text-sm text-slate-400 mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-slate-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
