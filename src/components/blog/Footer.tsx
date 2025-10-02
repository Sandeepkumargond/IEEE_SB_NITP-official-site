import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="w-full px-8 py-8 text-white relative overflow-hidden"
      style={{ 
        backgroundColor: '#0A5782',
        width: '1440px',
        minHeight: '297px'
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      <div className="relative z-10 space-y-6">
        {/* Logo and First Row Links */}
        <div className="flex items-center space-x-8">
          <ImageWithFallback
            src="https://www.bing.com/th/id/OIP.A-vIpzFXlnFNEBanIefsQgAAAA?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
            alt="IEEE NITP Logo"
            className="h-16 w-12 object-contain"
          />
          <div className="flex flex-wrap gap-6">
            <a href="https://www.ieee.org/about-ieee" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 hover:underline decoration-[#89FFF1] underline-offset-4">
              About IEEE
            </a>
            <a href="https://www.ieee.org/membership/renew" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 hover:underline decoration-[#89FFF1] underline-offset-4">
              IEEE Renew
            </a>
            <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 hover:underline decoration-[#89FFF1] underline-offset-4">
              IEEE Explore
            </a>
            <a href="https://www.ieee.org/membership/index.html" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 hover:underline decoration-[#89FFF1] underline-offset-4">
              IEEE Membership
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="ml-20 bg-white/5 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-[#89FFF1] font-semibold mb-2">Address</h3>
          <p className="text-gray-200">
            National Institute of Technology Patna<br />
            Bihar 800005, India
          </p>
        </div>

        {/* Second Row Links */}
        <div className="ml-20">
          <h3 className="text-[#89FFF1] font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-wrap gap-6">
            <a href="https://ieeesbnitp.netlify.app/#/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 hover:underline decoration-[#89FFF1] underline-offset-4">
              Old Website
            </a>
            <a href="https://ieeenitp.vercel.app/contact" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 hover:underline decoration-[#89FFF1] underline-offset-4">
              Contact Us
            </a>
            <a href="https://ieeenitp.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 hover:underline decoration-[#89FFF1] underline-offset-4">
              Projects
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="ml-20">
          <h3 className="text-[#89FFF1] font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="https://discord.gg/ieeenitp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-white/10" title="Discord">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/ieee.nitp/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-white/10" title="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ieee_nitp/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-white/10" title="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://github.com/IEEESBNITP" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-white/10" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/ieee-sb-nitp/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#89FFF1] transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-white/10" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-300">
            © 2025 IEEE Student Branch NIT Patna. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Advancing Technology for Humanity
          </p>
        </div>
      </div>
    </footer>
  );
}