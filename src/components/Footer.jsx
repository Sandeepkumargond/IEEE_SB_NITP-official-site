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

              <img src="IEEE.png" alt="" className="w-[138px] h-[38px]" />
            </div>

            {/* Right Nav (desktop only) */}
            <div className="hidden md:flex space-x-6 text-[16px] font-medium md:mt-1">
              <a href="#" className="hover:underline">
                About IEEE
              </a>
              <a href="#" className="hover:underline">
                IEEE Renew
              </a>
              <a href="#" className="hover:underline">
                IEEE Xplore
              </a>
              <a href="#" className="hover:underline">
                IEEE Membership
              </a>
            </div>
          </div>
          <p className="hidden md:block md:text-[16px]">
            National Institute of Technology Patna,Bihar (800005), India
          </p>
          <p className=" block md:hidden text-[12px] flex flex-col justify-center items-center">
            <div>National Institute of Technology Patna,</div>
            <div>Bihar (800005), India</div>
          </p>
      <p className="hidden md:block md:text-[16px]">
               National Institute of Technology Patna,Bihar (800005), India
              </p>
              <div className=" block md:hidden text-[12px] flex flex-col justify-center items-center">
                <span>National Institute of Technology Patna,</span>
                <span>Bihar (800005), India</span>
              </div>
          {/* ===== Mobile Nav with Headings ===== */}
          <div className="flex flex-col items-center space-y-2 text-center md:hidden text-[14px]">
            {/* IEEE section */}
            <p className="text-[#3DBAF3] font-semibold">IEEE</p>
            <a href="#" className="hover:underline">
              About IEEE
            </a>
            <a href="#" className="hover:underline">
              IEEE Renew
            </a>
            <a href="#" className="hover:underline">
              IEEE Xplore
            </a>
            <a href="#" className="hover:underline">
              IEEE Membership
            </a>

            {/* Others section */}
            <p className="text-[#3DBAF3] font-semibold mt-4">Others</p>
            <a href="#" className="hover:underline">
              Old Website
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Projects
            </a>

            {/* Social Icons (centered in mobile) */}
            <div className="flex grow space-x-6 text-2xl mt-4">
              <FaDiscord className="cursor-pointer hover:text-gray-300" />
              <FaFacebook className="cursor-pointer hover:text-gray-300" />
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
              <FaXTwitter className="cursor-pointer hover:text-gray-300" />
              <FaGithub className="cursor-pointer hover:text-gray-300" />
              <FaLinkedin className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>

          {/* ===== Desktop Bottom Row ===== */}
          <div className="hidden md:flex flex-row justify-between items-end">
            <div className="ml-auto flex flex-col items-end space-y-4">
              {/* Others links (horizontal in desktop) */}
              <div className="flex flex-row space-x-6 text-[16px]">
                <a href="#" className="hover:underline">
                  Old Website
                </a>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
                <a href="#" className="hover:underline">
                  Projects
                </a>
              </div>

              {/* Social Icons (desktop right-aligned) */}
              <div className="flex space-x-6 text-2xl">
                <FaDiscord className="cursor-pointer hover:text-gray-300" />
                <FaFacebook className="cursor-pointer hover:text-gray-300" />
                <FaInstagram className="cursor-pointer hover:text-gray-300" />
                <FaXTwitter className="cursor-pointer hover:text-gray-300" />
                <FaGithub className="cursor-pointer hover:text-gray-300" />
                <FaLinkedin className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>

          {/* ===== Bottom Line ===== */}
          <div className="border-t border-gray-400 pt-4 text-center text-[12px] md:text-sm">
            © 2024{" "}
            <a href="#" className="underline">
              IEEE SB NITP
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
