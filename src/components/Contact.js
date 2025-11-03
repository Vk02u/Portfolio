import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current && formRef.current.bot_field && formRef.current.bot_field.value) {
      return; // honeypot spam protection
    }

    setStatus({ loading: true, success: null, error: null });

    emailjs
      .sendForm('service_0t4rmso', 'template_l6noooq', formRef.current, {
        publicKey: 'dHBNkmPtWqo_J7bB1',
      })
      .then(() => {
        setStatus({ loading: false, success: 'Message sent successfully!', error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        setStatus({ loading: false, success: null, error: 'Failed to send message. Please try again.' });
      });
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-slate-400 mb-8">
              Feel free to reach out to me for any questions or opportunities. 
              I'm always open to discussing new projects, creative ideas, or collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-slate-400">Gulaothi, Bulandshahr, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-slate-400">vivekkansalvkvk@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-slate-400">+91 9548274118</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Vk02u/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/vivek-kansal-a71443271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a
                  href="https://www.hackerrank.com/profile/vk2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-green-600"
                >
                  <i className="fab fa-hackerrank text-xl"></i>
                </a>
                <a
                  href="https://leetcode.com/u/vk2003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-amber-500"
                >
                  <i className="fas fa-code text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="bot_field" className="hidden" tabIndex="-1" autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`px-8 py-3 rounded-full btn-primary font-medium w-full transition ${
                  status.loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status.loading ? 'Sending...' : 'Send Message'}{' '}
                <i className="fas fa-paper-plane ml-2"></i>
              </button>

              {status.success && (
                <p className="text-green-500 font-medium text-center mt-4">{status.success}</p>
              )}
              {status.error && (
                <p className="text-red-500 font-medium text-center mt-4">{status.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
