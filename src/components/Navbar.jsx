"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "About", path: "/about" },
    { id: 2, name: "Events", path: "/events" },
    { id: 3, name: "Gallery", path: "/gallery" },
    { id: 4, name: "Teams", path: "/teams" },
    { id: 5, name: "Office", path: "/committee" },
    { id: 6, name: "Projects", path: "/projects" },
    { id: 7, name: "Blogs", path: "/blogs" },
    { id: 8, name: "E-certificate", path: "/certificate" },
    { id: 9, name: "Join IEEE", path: "https://www.ieee.org/membership/join" },
  ];

  return (
    <div className="w-full h-20 flex items-center justify-between px-6 fixed top-0 bg-[#0a5782] text-white z-50 shadow-lg">
      <img 
      className="object-cover w-36 h-12"
      src="/IEEE.png" 
      alt="IEEE LOGO"/>

      <ul className="hidden md:flex items-center gap-6 text-base font-medium">
        {navItems.map((item) => (
          <li key={item.id} className="hover:text-gray-300 transition">
            {item.path.startsWith("http") ? (
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) : (
              <Link href={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>

      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? (
          <MdClose className="text-3xl" />
        ) : (
          <MdMenu className="text-3xl" />
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-white text-[#07689F] flex flex-col items-center py-10 gap-6 md:hidden z-40"
          >
            {navItems.map((item) => (
              item.path.startsWith("http") ? (
                <a
                  key={item.id}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {item.name}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
