import {
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/ieee_nitp/",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/ieee-sb-nitp/",
      label: "LinkedIn",
    },
    { icon: FaDiscord, href: "#", label: "Discord" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/blogs", label: "Blogs" },
    { href: "/developers", label: "Developers" },
  ];

  const communityLinks = [
    { href: "/teams", label: "Teams" },
    { href: "/committee", label: "Committee" },
    { href: "#", label: "Discord Community" },
    { href: "#", label: "Sponsor Us" },
  ];

  const resourceLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/certificate", label: "E-Certificate" },
    { href: "/admin", label: "Admin Portal" },
  ];

  return (
    <footer className="bg-[#0a5782] text-white font-poppins">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-[70px] py-16 md:py-20">
        <div className="mx-auto max-w-[1300px]">
          {/* Logo and Description */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-10 mb-12">
            {/* Brand Section */}
            <div className="col-span-1">
              <h2 className="text-lg font-bold mb-4">IEEE SB NITP</h2>
              <p className="text-sm text-gray-200 leading-relaxed mb-6">
                Advancing technology for humanity through innovation, learning, and collaboration.
              </p>
              <div className="flex gap-5 text-xl" role="list" aria-label="Social Media">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="hover:text-gray-300 transition-colors duration-300"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold mb-5 uppercase tracking-wider">Quick Links</h3>
              <nav className="space-y-3" aria-label="Quick Links">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-sm font-semibold mb-5 uppercase tracking-wider">Community</h3>
              <nav className="space-y-3" aria-label="Community Links">
                {communityLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold mb-5 uppercase tracking-wider">Resources</h3>
              <nav className="space-y-3" aria-label="Resource Links">
                {resourceLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-sm font-semibold mb-5 uppercase tracking-wider">Get In Touch</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-300 mb-2">Email</p>
                  <a
                    href="mailto:ieee.nitp@nitp.ac.in"
                    className="text-sm text-gray-200 hover:text-white transition-colors duration-300 break-all"
                  >
                    ieee.nitp@nitp.ac.in
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-300 mb-2">Location</p>
                  <p className="text-sm text-gray-200">
                    NIT Patna BIHTA Campus,
                    <br />
                    Patna, Bihar 801103
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-300">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© {currentYear} IEEE Student Branch, NIT Patna. All Rights Reserved.</p>
            </div>
            <div className="text-center md:text-right space-y-1">
              <p>Version 1.0</p>
              <p>Designed with <span className="text-red-400">❤</span> by IEEE Team</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
