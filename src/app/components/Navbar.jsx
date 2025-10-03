"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { id: 1, name: "About", path: "/" },
    { id: 2, name: "Committee", path: "/committee" },
    { id: 3, name: "Events", path: "/events" },
    { id: 4, name: "E-certificate", path: "/certificate" },
    { id: 5, name: "Blogs", path: "/blogs" },
    { id: 6, name: "Gallery", path: "/gallery" },
    { id: 7, name: "Join IEEE", path: "/join" },
    { id: 8, name: "Admin", path: "/admin" },
  ];

  return (
    <div className="w-full h-[8ch] flex items-center justify-between px-6 fixed top-0 bg-[#07689F] text-white z-30">
      <h1 className="font-bold text-xl">IEEE Logo</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-base font-medium">
        {navItems.map((item) => (
          <li key={item.id} className="hover:text-gray-300 transition">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <MdClose className="text-3xl" /> : <MdMenu className="text-3xl" />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white text-[#07689F] flex flex-col items-center py-10 gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setOpen(false)}
                className="text-lg"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
