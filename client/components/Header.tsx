import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const navItems = [
    "About",
    "Committee", 
    "Events",
    "E-Certificate",
    "Blogs",
    "Gallery",
    "Join IEEE",
    "Admin"
  ];

  return (
    <header className={cn("w-full bg-ieee-primary px-4 lg:px-[71px] py-[19px]", className)}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9eadd9531f53a3607ce5d228eaf417e0987d0aca?width=276" 
            alt="IEEE NITP Logo" 
            className="h-[38px] w-[138px] rounded-[41px]"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-[25px]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('e-certificate', 'certificate')}`}
              className="text-ieee-light text-xl font-normal hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden text-ieee-light hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
