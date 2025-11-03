import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darker py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold gradient-text">Portfolio</a>
            <p className="text-slate-400 mt-2">© 2023 Vivek. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
          <a href="https://github.com/Vk02u/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition">
  <i className="fab fa-github text-xl"></i>
</a>
<a href="https://www.linkedin.com/in/vivek-kansal-a71443271/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition">
  <i className="fab fa-linkedin-in text-xl"></i>
</a>
 <a href="https://www.hackerrank.com/profile/vk2003" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-600 transition">
  <i className="fab fa-hackerrank text-xl"></i>
</a>
 <a href="https://leetcode.com/u/vk2003/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition">
  <i className="fas fa-code text-xl"></i>
</a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>Made with <i className="fas fa-heart text-red-500"></i> and lots of <i className="fas fa-coffee text-amber-500"></i></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
