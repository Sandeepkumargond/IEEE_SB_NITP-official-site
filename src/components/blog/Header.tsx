import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface HeaderProps {
  onBlogsClick?: () => void;
}

export function Header({ onBlogsClick }: HeaderProps) {
  const navItems = [
    { name: 'About', href: 'https://ieeenitp.vercel.app/about', external: true },
    { name: 'Committee', href: 'https://ieeenitp.vercel.app/committee', external: true }, 
    { name: 'Events', href: 'https://ieeenitp.vercel.app/events', external: true },
    { name: 'E-Certificate', href: 'https://ieeenitp.vercel.app/certificate-download', external: true },
    { name: 'Blogs', href: '#', external: false },
    { name: 'Gallery', href: 'https://ieeenitp.vercel.app/gallery', external: true },
    { name: 'Join IEEE', href: 'https://www.ieee.org/membership/join', external: true },
    { name: 'Admin', href: 'https://ieeenitp.vercel.app/login', external: true }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.name === 'Blogs') {
      // Stay on current page and scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (onBlogsClick) {
        onBlogsClick();
      }
      toast.success('Navigated to Blogs section');
    } else if (item.external) {
      // Show loading state briefly before opening link
      const button = document.activeElement as HTMLElement;
      if (button) {
        button.style.opacity = '0.7';
        setTimeout(() => {
          button.style.opacity = '1';
        }, 200);
      }
      // Open external links in new tab
      window.open(item.href, '_blank', 'noopener,noreferrer');
      toast.success(`Opening ${item.name} in new tab`);
    } else {
      // For internal navigation (if needed in future)
      window.location.href = item.href;
    }
  };

  return (
    <header 
      className="w-full h-36 flex items-center px-8 shadow-lg"
      style={{ 
        backgroundColor: '#0A5782',
        width: '1440px',
        height: '144px'
      }}
    >
      {/* Logo */}
      <div className="flex-shrink-0 mr-8">
        <ImageWithFallback
          src="https://www.bing.com/th/id/OIP.A-vIpzFXlnFNEBanIefsQgAAAA?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
          alt="IEEE NITP Logo"
          className="h-20 w-16 object-contain"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white hover:text-gray-200 hover:bg-[#0781C2] transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg border border-transparent hover:border-white/20 shadow-md hover:shadow-lg transform hover:scale-105"
                  style={{ backgroundColor: '#0781C2' }}
                >
                  {item.name}
                </a>
              ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-white hover:text-gray-200 hover:bg-[#0781C2] transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg border border-transparent hover:border-white/20 shadow-md hover:shadow-lg transform hover:scale-105"
                  style={{ backgroundColor: '#0781C2' }}
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}