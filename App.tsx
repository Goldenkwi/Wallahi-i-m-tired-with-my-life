import React, { useState, useRef, useEffect } from 'react';
import SidebarNav from './components/SidebarNav';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="relative">
      <a href="#main-content" className="absolute top-0 left-0 m-3 p-3 bg-surface rounded-lg text-accent -translate-y-96 focus:translate-y-0 transition-transform duration-300 z-50">
        Skip to main content
      </a>

      <div className="flex flex-col lg:flex-row">
        <SidebarNav activeSection={activeSection} />

        <main id="main-content" className="flex-1 lg:pl-24">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            {/* FIX: The ref callback for each section was implicitly returning a value due to being wrapped in parentheses, which violates the expected `void` return type for ref callbacks. The fix is to use curly braces to create a block body, preventing an implicit return. */}
            <div id={SECTIONS.HOME} ref={(el) => { sectionRefs.current[SECTIONS.HOME] = el; }}>
              <Hero />
            </div>
            <div id={SECTIONS.ABOUT} ref={(el) => { sectionRefs.current[SECTIONS.ABOUT] = el; }}>
              <About />
            </div>
            <div id={SECTIONS.RESUME} ref={(el) => { sectionRefs.current[SECTIONS.RESUME] = el; }}>
              <Resume />
            </div>
            <div id={SECTIONS.PORTFOLIO} ref={(el) => { sectionRefs.current[SECTIONS.PORTFOLIO] = el; }}>
              <Portfolio />
            </div>
            <div id={SECTIONS.TESTIMONIALS} ref={(el) => { sectionRefs.current[SECTIONS.TESTIMONIALS] = el; }}>
              <Testimonials />
            </div>
            <div id={SECTIONS.CONTACT} ref={(el) => { sectionRefs.current[SECTIONS.CONTACT] = el; }}>
              <Contact />
            </div>
          </div>
          <footer className="text-center py-8 text-cream/40 text-sm">
            © {new Date().getFullYear()} Ammar — Built with React & Tailwind CSS
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
