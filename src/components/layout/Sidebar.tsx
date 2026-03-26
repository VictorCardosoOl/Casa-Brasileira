import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'home', num: '01', label: 'Home' },
  { id: 'story', num: '02', label: 'História' },
  { id: 'menu', num: '03', label: 'Menu' },
  { id: 'passport', num: '04', label: 'Passaporte' },
  { id: 'map', num: '05', label: 'Local' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-screen w-32 hidden lg:flex flex-col justify-center items-start pl-8 z-50 pointer-events-none">
      <nav className="flex flex-col gap-6 pointer-events-auto">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
              activeSection === item.id ? 'text-casa-accent' : 'text-casa-text-light hover:text-casa-text'
            }`}
          >
            <span className="w-4">{item.num}</span>
            <span className={`transition-all duration-300 ${activeSection === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
