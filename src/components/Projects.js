import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Plant-Sense: Smart Plant Monitoring Web App",
      description: "IoT-based plant monitoring dashboard. Displays real-time sensor data and insights.",
      image: "nhttps://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1470&auto=format&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveDemo: "#",
      code: "https://github.com/Vk02u/Plant-Sense-Smart-Plant-Monitoring-Web-Application"
    },
    {
      id: 2,
      title: "AI-TODO: Smart Task Manager",
      description: "Task manager with modern UI; organizes todos efficiently.",
      image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1470&auto=format&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS", "Python"],
      liveDemo: "#",
      code: "https://github.com/Vk02u/AI-TODO"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="project-card rounded-xl overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a href={project.liveDemo} className="text-primary hover:text-secondary">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.code} className="text-primary hover:text-secondary">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/Vk02u/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full btn-primary font-medium inline-flex items-center">
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
