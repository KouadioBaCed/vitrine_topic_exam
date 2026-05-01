import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo/zouzou_image.png"
            alt="FinMark"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Formations', 'Services', 'Avantages', 'Tarifs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                scrolled ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#tarifs"
            className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-blue-600 hover:bg-blue-50'
                : 'text-white hover:text-blue-200'
            }`}
          >
            Se connecter
          </a>
          <a
            href="#tarifs"
            className="text-sm font-semibold px-5 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md"
          >
            Commencer
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {['Formations', 'Services', 'Avantages', 'Tarifs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#tarifs"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors mt-2"
          >
            Commencer maintenant
          </a>
        </div>
      )}
    </nav>
  );
}
