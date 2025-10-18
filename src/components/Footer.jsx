import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaDiscord, href: "#", label: "Discord" },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/ieee.nitp",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/ieee_nitp/",
      label: "Instagram",
    },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaGithub, href: "https://github.com/IEEESBNITP", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/ieee-sb-nitp/",
      label: "LinkedIn",
    },
  ];

  const ieeeLinks = [
    { href: "https://www.ieee.org/about-ieee", label: "About IEEE" },
    { href: "https://www.ieee.org/membership/renew", label: "IEEE Renew" },
    {
      href: "https://ieeexplore.ieee.org/Xplore/home.jsp",
      label: "IEEE Xplore",
    },
    { href: "https://www.ieee.org/membership", label: "IEEE Membership" },
  ];

  const otherLinks = [
    { href: "https://ieeenitp.vercel.app/", label: "Old Website" },
    { href: "#", label: "Contact Us" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <footer className="bg-[#0a5782] text-[#F0F9FF] font-poppins">
      <div className="mx-auto max-w-[1440px] px-5 md:px-[70px] py-8 md:py-10">
        <div className="mx-auto max-w-[1300px] space-y-6">
          {/* Desktop Layout */}
          <div className="hidden md:block space-y-4">
            {/* Top Row - Logo and IEEE Links */}
            <div className="flex justify-between items-start">
              <img
                src="/IEEE.png"
                alt="IEEE Logo"
                className="w-40 h-16 object-contain"
              />
              <nav
                className="flex gap-6 text-base font-medium"
                aria-label="IEEE Navigation"
              >
                {ieeeLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:underline transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Address */}
            <p className="text-base">
              National Institute of Technology Patna, Bihar (800005), India
            </p>

            {/* Bottom Row - Other Links and Social */}
            <div className="flex justify-end items-center gap-8">
              <nav
                className="flex gap-6 text-base"
                aria-label="Additional Navigation"
              >
                {otherLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:underline transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div
                className="flex gap-6 text-2xl"
                role="list"
                aria-label="Social Media"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="hover:text-gray-300 transition-colors"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-6 text-center">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src="/IEEE.png"
                alt="IEEE Logo"
                className="w-40 h-16 object-contain"
              />
            </div>

            {/* Address */}
            <p className="text-xs leading-relaxed">
              National Institute of Technology Patna,
              <br />
              Bihar (800005), India
            </p>

            {/* IEEE Links */}
            <nav className="space-y-2 text-sm" aria-label="IEEE Navigation">
              <p className="text-[#3DBAF3] font-semibold text-base">IEEE</p>
              {ieeeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block hover:underline transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Other Links */}
            <nav
              className="space-y-2 text-sm"
              aria-label="Additional Navigation"
            >
              <p className="text-[#3DBAF3] font-semibold text-base">Others</p>
              {otherLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block hover:underline transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div
              className="flex justify-center gap-6 text-2xl"
              role="list"
              aria-label="Social Media"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-400 pt-4 text-center text-xs md:text-sm">
            © {currentYear}{" "}
            <a
              href="/"
              className="font-semibold hover:underline transition-all"
            >
              IEEE SB NITP
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
