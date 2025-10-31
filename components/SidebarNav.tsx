import React from 'react';
import { Home, User, Briefcase, Layers, MessageSquare, Mail } from 'lucide-react';
import { SECTIONS } from '../constants';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { href: `#${SECTIONS.HOME}`, label: 'Home', icon: <Home size={22} /> },
  { href: `#${SECTIONS.ABOUT}`, label: 'About', icon: <User size={22} /> },
  { href: `#${SECTIONS.RESUME}`, label: 'Resume', icon: <Briefcase size={22} /> },
  { href: `#${SECTIONS.PORTFOLIO}`, label: 'Portfolio', icon: <Layers size={22} /> },
  { href: `#${SECTIONS.TESTIMONIALS}`, label: 'Testimonials', icon: <MessageSquare size={22} /> },
  { href: `#${SECTIONS.CONTACT}`, label: 'Contact', icon: <Mail size={22} /> },
];

const SidebarNav: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
    const isActive = activeSection === item.href.substring(1);
    return (
      <a
        href={item.href}
        aria-label={item.label}
        className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-out
          ${isActive ? 'bg-accent text-background' : 'text-cream/50 hover:bg-surface hover:text-accent'}`}
      >
        {item.icon}
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-surface border border-white/10 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none lg:block hidden">
          {item.label}
          <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-surface border-b border-l border-white/10 rotate-45"></span>
        </span>
      </a>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col items-center justify-center w-24 h-screen fixed top-0 left-0 z-40 bg-background border-r border-white/5">
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => (
             <a
             key={item.href}
             href={item.href}
             aria-label={item.label}
             className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors duration-200 ${
                activeSection === item.href.substring(1) ? 'text-accent' : 'text-cream/50 hover:text-accent'
             }`}
           >
              {item.icon}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SidebarNav;
