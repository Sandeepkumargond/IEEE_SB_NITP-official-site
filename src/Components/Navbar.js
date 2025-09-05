"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <div className="font-bold text-lg">IEEE NITP</div>
      <ul className="flex space-x-6 text-sm">
        {["About", "Committee", "Events", "E-Certificate", "Blogs", "Gallery", "Join IEEE", "Admin"].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:underline">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
