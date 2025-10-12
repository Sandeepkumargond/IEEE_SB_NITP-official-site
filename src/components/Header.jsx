"use client";

export default function Header() {
  return (
    <header className="bg-[#0a5782] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-[20px] md:px-[70px] h-[64px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/IEEE.png" alt="IEEE SB NITP" className="h-[28px] w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-[14px]">
          <a href="/about" className="hover:underline">About</a>
          <a href="/committee" className="hover:underline">Committee</a>
          <a href="#" className="hover:underline">Events</a>
          <a href="#" className="hover:underline">E-Certificate</a>
          <a href="/blog" className="hover:underline">Blogs</a>
          <a href="#" className="hover:underline">Gallery</a>
          <a href="#" className="hover:underline">Join IEEE</a>
          <a href="#" className="hover:underline">Admin</a>
        </nav>
      </div>
    </header>
  );
}



