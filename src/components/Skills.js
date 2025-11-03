import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillBarsRef = useRef([]);

  useEffect(() => {
    const animateSkillBars = () => {
      const skillsSection = document.getElementById('skills');
      if (!skillsSection) return;
      
      const skillsSectionTop = skillsSection.offsetTop;
      const windowHeight = window.innerHeight;
      
      if (window.scrollY > skillsSectionTop - windowHeight + 200) {
        skillBarsRef.current.forEach((bar, index) => {
          if (bar) {
            const targetWidth = technicalSkills[index]?.percentage || professionalSkills[index - technicalSkills.length]?.percentage || 0;
            bar.style.width = `${targetWidth}%`;
          }
        });
      }
    };

    // Initial check
    animateSkillBars();
    
    window.addEventListener('scroll', animateSkillBars);
    return () => window.removeEventListener('scroll', animateSkillBars);
  }, []);

  const technicalSkills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Python', percentage: 95 },
    { name: 'FastAPI', percentage: 80 },
    { name: 'C/C++', percentage: 75 },
    { name: 'SQL', percentage: 80 },
    { name: 'MongoDB', percentage: 80 }
  ];

  const professionalSkills = [
    { name: 'Communication', percentage: 90 },
    { name: 'Teamwork', percentage: 85 },
    { name: 'Problem Solving', percentage: 95 },
    { name: 'Creativity', percentage: 75 }
  ];

  const tools = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-500' },
    { name: 'FastAPI', icon: 'fas fa-server', color: 'text-green-400' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-blue-300' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
    { name: 'npm', icon: 'fab fa-npm', color: 'text-red-500' },
    { name: 'Sass', icon: 'fab fa-sass', color: 'text-pink-500' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-500' },
    { name: 'VS Code', icon: 'fas fa-terminal', color: 'text-gray-300' },
    { name: 'Linux', icon: 'fab fa-linux', color: 'text-white' }
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      ref={el => skillBarsRef.current[index] = el}
                      className='skill-progress' 
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Skills</h3>
            
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      ref={el => skillBarsRef.current[index + technicalSkills.length] = el}
                      className='skill-progress' 
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Tools & <span className="gradient-text">Technologies</span></h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
                <i className={`${tool.icon} text-4xl ${tool.color} mb-2`}></i>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
