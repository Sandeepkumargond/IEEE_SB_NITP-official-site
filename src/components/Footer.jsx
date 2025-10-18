import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0a5782] text-[#F0F9FF] font-poppins">
      {/* Outer Container */}
      <div className="mx-auto w-full max-w-[1440px] px-[20px] md:px-[70px] py-[10px]">
        {/* Inner Container */}
        <div className="mx-auto w-full max-w-[1300px] py-[10px] flex flex-col justify-between gap-[15px]">
          {/* ===== Top Row ===== */}
          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
            {/* Left - Logo + Address */}
            <div className="text-center md:text-left md:mt-1">
              {/* <h2 className="text-[14px] md:text-lg font-semibold"> */}

              <img
                src="/IEEE.png"
                alt="IEEE LOGO"
                className="w-40 h-16 object-fill"
              />
            </div>

            {/* Right Nav (desktop only) */}
            <div className="hidden md:flex space-x-6 text-[16px] font-medium md:mt-1">
              <a
                href="https://www.ieee.org/about-ieee"
                className="hover:underline"
              >
                About IEEE
              </a>
              <a
                href="https://www.ieee.org/membership/renew"
                className="hover:underline"
              >
                IEEE Renew
              </a>
              <a
                href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                className="hover:underline"
              >
                IEEE Xplore
              </a>
              <a
                href="https://www.ieee.org/membership"
                className="hover:underline"
              >
                IEEE Membership
              </a>
            </div>
          </div>
      <p className="hidden md:block md:text-[16px]">
               National Institute of Technology Patna,Bihar (800005), India
              </p>
              <p className=" block md:hidden text-[12px] flex flex-col justify-center items-center">
                <span>
            National Institute of Technology Patna,
                </span>
                <span>
        Bihar (800005), India
                </span>
              </p>
          {/* ===== Mobile Nav with Headings ===== */}
          <div className="flex flex-col items-center space-y-2 text-center md:hidden text-[14px]">
            {/* IEEE section */}
            <p className="text-[#3DBAF3] font-semibold">IEEE</p>
            <a
              href="https://www.ieee.org/about-ieee"
              className="hover:underline"
            >
              About IEEE
            </a>
            <a
              href="https://www.ieee.org/membership/renew"
              className="hover:underline"
            >
              IEEE Renew
            </a>
            <a
              href="https://ieeexplore.ieee.org/Xplore/home.jsp"
              className="hover:underline"
            >
              IEEE Xplore
            </a>
            <a
              href="https://www.ieee.org/membership"
              className="hover:underline"
            >
              IEEE Membership
            </a>

            {/* Others section */}
            <p className="text-[#3DBAF3] font-semibold mt-4">Others</p>
            <a href="https://ieeenitp.vercel.app/" className="hover:underline">
              Old Website
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="/projects" className="hover:underline">
              Projects
            </a>

            {/* Social Icons (centered in mobile) */}
            <div className="flex grow space-x-6 text-2xl mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="cursor-pointer hover:text-gray-300" />
              </a>
              <a
                href="https://www.facebook.com/ieee.nitp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="cursor-pointer hover:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/ieee_nitp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-gray-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="cursor-pointer hover:text-gray-300" />
              </a>
              <a href="https://github.com/IEEESBNITP" target="_blank" rel="noopener noreferrer">
                <FaGithub className="cursor-pointer hover:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-sb-nitp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer hover:text-gray-300" />
              </a>
            </div>
          </div>

          {/* ===== Desktop Bottom Row ===== */}
          <div className="hidden md:flex flex-row justify-between items-end">
            <div className="ml-auto flex flex-col items-end space-y-4">
              {/* Others links (horizontal in desktop) */}
              <div className="flex flex-row space-x-6 text-[16px]">
                <a href="https://ieeenitp.vercel.app/" className="hover:underline">
                  Old Website
                </a>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
              </div>

              {/* Social Icons (desktop right-aligned) */}
              <div className="flex space-x-6 text-2xl">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="cursor-pointer hover:text-gray-300" />
                </a>
                <a
                  href="https://www.facebook.com/ieee.nitp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="cursor-pointer hover:text-gray-300" />
                </a>
                <a
                  href="https://www.instagram.com/ieee_nitp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer hover:text-gray-300" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="cursor-pointer hover:text-gray-300" />
                </a>
                <a href="https://github.com/IEEESBNITP" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="cursor-pointer hover:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ieee-sb-nitp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="cursor-pointer hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* ===== Bottom Line ===== */}
          <div className="border-t border-gray-400 pt-4 text-center text-[12px] md:text-sm">
            © 2024{" "}
            <a href="/" className="cursor-pointer font-semibold hover:underline">
              IEEE SB NITP
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
