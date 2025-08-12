import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  
  // Handle scroll effect for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-premium ${scrolled ? 
        'bg-dark/90 backdrop-blur-lg shadow-premium' : 
        'bg-dark/80 backdrop-blur'}`} 
      role="banner"
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="logo-container flex items-center gap-3">
            <div className="logo-icon w-10 h-10 bg-gradient-primary from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              FC
            </div>
            <div className="logo-text flex flex-col">
              <span className="logo-main text-xl font-extrabold bg-gradient-to-r from-white to-light/80 bg-clip-text text-transparent whitespace-nowrap">
                ForgeCircle
              </span>
              <span className="logo-sub text-xs text-white/70 -mt-0.5 whitespace-nowrap">
                Campus-to-Career Alumni Hub
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/product#highlights', label: 'Features' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => {
              const isProductLink = item.href.startsWith('/product');
              const active = isProductLink ? router.pathname === '/product' : router.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`text-sm font-medium relative group outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-0.5 transition-colors ${
                      active ? 'text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
            <li>
              <Link 
                href="/demo" 
                className="inline-flex items-center justify-center bg-gradient-primary from-accent to-[#ee5a24] text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-premium focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              >
                Book Demo
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden p-2 bg-white/10 rounded-lg backdrop-blur-lg border border-white/10 text-white outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu with glassmorphism */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-dark/95 backdrop-blur-lg border-t border-white/10 animate-fadeInUp origin-top">
          <div className="container mx-auto px-4 py-5 space-y-3">
            <Link 
              href="/" 
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Home
            </Link>
            <Link 
              href="/product#highlights" 
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Features
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Contact
            </Link>
            <div className="pt-3 pb-1">
              <Link 
                href="/demo" 
                className="block w-full bg-gradient-primary from-accent to-[#ee5a24] text-white text-center py-3 rounded-lg font-semibold shadow-lg focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
