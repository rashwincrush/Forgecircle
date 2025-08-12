import SeoHead from '../components/SeoHead';
import { useState, useEffect, useMemo, useRef } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { href: '#overview', label: 'Overview' },
  { href: '#highlights', label: 'Key Features' },
  { href: '#modules', label: 'Modules' },
  { href: '#notifications', label: 'Notifications' },
  { href: '#security', label: 'Trust & Security' },
];

function SectionTitle({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <h2 className={`reveal-on-scroll text-3xl md:text-5xl lg:text-6xl font-extrabold ${accent ? 'text-gradient-accent' : 'bg-gradient-to-r from-white via-white to-light/80 bg-clip-text text-transparent'} tracking-tight mb-4`}>
      {children}
    </h2>
  );
}

export default function Product() {
  // Track active section for side navigation highlighting
  const [active, setActive] = useState<string>('#overview');
  const sectionIds = useMemo(() => NAV_ITEMS.map(n => n.href.replace('#','')), []);
  const [mounted, setMounted] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  
  // Set mounted state for client-side animations
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Advanced scroll animations with useRef
  const sectionsRef = useRef<{[key: string]: HTMLElement | null}>({});

  // Set initial active from URL hash and keep in sync on hash changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const setFromHash = () => {
      const hash = window.location.hash;
      if (hash) setActive(hash);
    };
    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry nearest to top that's intersecting
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        const top = visible[0];
        if (top?.target?.id) setActive(`#${top.target.id}`);
      },
      { rootMargin: '-56px 0px -70% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  // Reveal-on-scroll animations for section content and cards
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    if (items.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add('revealed');
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <SeoHead
        title="Product — ForgeCircle"
        description="Everything you need to run an alumni network in one clean platform."
      />
      {/* Add page transition class when mounted */}
      <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Side navigation for larger screens */}
      <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-40 ml-4">
        <div className="bg-dark/60 backdrop-blur-xl rounded-xl p-2 shadow-glow-lg">
          <nav>
            <ul className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`block py-2 px-3 rounded-lg text-sm transition-all ${isActive ? 'side-nav-active' : 'side-nav-item'}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile floating nav button */}
      <div className="lg:hidden fixed bottom-4 left-4 z-50">
        <button 
          onClick={() => setSideNavOpen(!sideNavOpen)}
          className="bg-accent rounded-full p-3 shadow-glow text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Mobile slide-out navigation */}
      <div className={`lg:hidden fixed inset-y-0 left-0 w-64 bg-dark/95 backdrop-blur-xl z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${sideNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white">Navigation</h3>
            <button onClick={() => setSideNavOpen(false)} className="text-white/70 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setSideNavOpen(false)}
                      className={`block py-3 px-4 rounded-lg ${isActive ? 'side-nav-active' : 'side-nav-item'}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <main className="relative">
        {/* Hero with immersive aurora background */}
        <section
          id="overview"
          className="relative h-screen min-h-[700px] flex items-center overflow-hidden scroll-mt-28 bg-darker"
        >
          {/* Animated aurora background */}
          <div aria-hidden className="bg-aurora absolute inset-0" />
          
          {/* Grid pattern overlay */}
          <div aria-hidden className="bg-grid absolute inset-0 opacity-20"></div>
          
          {/* Content container */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-on-scroll">
                <div className="inline-flex items-center py-1 px-3 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                  <span className="text-sm font-medium">Alumni Platform</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                  Everything you need to run an alumni network
                </h1>
                <p className="text-white/80 text-xl leading-relaxed mb-8 max-w-2xl">
                  Groups, events, directory, messaging, jobs & mentorship, and simple admin—built in and ready to go.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="btn btn-primary group">
                    <span>Book a demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a href="#highlights" className="btn btn-secondary">
                    <span>See features</span>
                  </a>
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute w-64 h-64 rounded-full bg-primary/30 filter blur-[80px] -top-10 -left-10"></div>
                <div className="absolute w-64 h-64 rounded-full bg-accent/30 filter blur-[80px] -bottom-10 -right-10"></div>
                <div className="relative card-3d">
                  <div className="bg-dark/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-glow-lg p-1">
                    <Image 
                      src="/images/product-dashboard.png" 
                      alt="ForgeCircle dashboard" 
                      width={600} 
                      height={400} 
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
              <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Metrics section with 3D cards */}
        <section className="py-24 container mx-auto px-6">
          <div className="section-divider mb-16"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: '<15 min setup', s: 'Go live fast', icon: 'clock' },
              { t: 'Realtime', s: 'Messages & alerts', icon: 'zap' },
              { t: '15+ modules', s: 'Out of the box', icon: 'package' },
              { t: 'White-label', s: 'Custom branding', icon: 'layers' }
            ].map((m, idx) => (
              <div
                key={idx}
                className="card-3d bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 reveal-on-scroll shadow-glow-sm"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="mb-3">
                  {m.icon === 'clock' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {m.icon === 'zap' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {m.icon === 'package' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  )}
                  {m.icon === 'layers' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                </div>
                <div className="text-white text-xl font-bold mb-1">{m.t}</div>
                <div className="text-white/70">{m.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Highlights section */}
        <section id="highlights" className="py-24 container mx-auto px-6 scroll-mt-28">
          <div className="mb-16 max-w-3xl mx-auto text-center reveal-on-scroll">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary mb-6">
              <span className="text-sm font-medium">Features</span>
            </div>
            <SectionTitle accent={true}>Key Highlights</SectionTitle>
            <p className="text-white/80 text-xl leading-relaxed">
              A powerful suite of features designed specifically for alumni networks
            </p>
            {/* Alias anchor for backward compatibility */}
            <div id="features" className="sr-only scroll-mt-28" aria-hidden="true" />
          </div>
          
          {/* Feature cards grid with 3D effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'hub',
                title: 'All-in-one hub',
                desc: 'Groups, Events, Directory, Messaging, Jobs, Mentorship.'
              },
              {
                icon: 'clock',
                title: 'Timezone-smart events',
                desc: 'Create once; everyone sees local time.'
              },
              {
                icon: 'zap',
                title: 'Realtime by default',
                desc: 'New messages and updates appear instantly.'
              },
              {
                icon: 'bell',
                title: 'Multi-channel alerts',
                desc: 'WhatsApp & Email for RSVPs, messages, and job updates.'
              },
              {
                icon: 'lock',
                title: 'Role-aware access',
                desc: 'Members, organizers, and admins see what they need.'
              },
              {
                icon: 'search',
                title: 'Searchable directory',
                desc: 'Rich profiles with role, company, and location.'
              },
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="card-3d bg-dark/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 reveal-on-scroll"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 text-accent">
                  {feature.icon === 'hub' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {feature.icon === 'clock' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {feature.icon === 'zap' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {feature.icon === 'bell' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  )}
                  {feature.icon === 'lock' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  )}
                  {feature.icon === 'search' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Feature Modules section */}
        <section id="modules" className="py-24 container mx-auto px-6 scroll-mt-28 bg-aurora bg-opacity-10">
          <div className="mb-16 max-w-3xl mx-auto text-center reveal-on-scroll">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary mb-6">
              <span className="text-sm font-medium">Modules</span>
            </div>
            <SectionTitle accent={true}>Feature Modules</SectionTitle>
            <p className="text-white/80 text-xl leading-relaxed">
              Everything you need to run an alumni network in one clean platform
            </p>
          </div>
          
          {/* Module features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              {
                icon: 'people',
                title: 'Groups',
                desc: 'Create public/private spaces with intuitive member management'
              },
              {
                icon: 'calendar',
                title: 'Events',
                desc: 'Track RSVPs with automatic timezone conversion for each user'
              },
              {
                icon: 'search',
                title: 'Directory',
                desc: 'Searchable profiles with company, role, and location data'
              },
              {
                icon: 'chat',
                title: 'Messaging',
                desc: 'Realtime 1:1 messaging with smart notifications'
              },
              {
                icon: 'job',
                title: 'Jobs Board',
                desc: 'Post and discover opportunities within your network'
              },
              {
                icon: 'mentor',
                title: 'Mentorship',
                desc: 'Connect mentors and mentees with guided workflows'
              },
              {
                icon: 'mobile',
                title: 'Mobile Friendly',
                desc: 'Optimized for phones and tablets for on-the-go access'
              },
              {
                icon: 'admin',
                title: 'Admin Console',
                desc: 'Approvals, analytics, and settings—no code required'
              }
            ].map((module, idx) => (
              <div 
                key={idx} 
                className="card-3d bg-dark/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 reveal-on-scroll"
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="mb-4 text-secondary">
                  {module.icon === 'people' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {module.icon === 'calendar' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  {module.icon === 'search' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                  {module.icon === 'chat' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  {module.icon === 'job' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {module.icon === 'mentor' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  {module.icon === 'mobile' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {module.icon === 'admin' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{module.title}</h3>
                <p className="text-white/70">{module.desc}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Notifications section */}
        <section id="notifications" className="py-24 container mx-auto px-6 scroll-mt-28 bg-aurora bg-opacity-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10"></div>
          <div className="relative z-10">
            <div className="mb-16 max-w-3xl mx-auto text-center reveal-on-scroll">
              <div className="inline-flex items-center py-1 px-3 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent mb-6">
                <span className="text-sm font-medium">New Feature</span>
              </div>
              <SectionTitle accent={true}>Multi-Channel Notifications</SectionTitle>
              <p className="text-white/80 text-xl leading-relaxed">
                Never miss an important update with our multi-channel notification system
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
              {/* Left column with phone illustration */}
              <div className="lg:col-span-1 reveal-on-scroll order-2 lg:order-1" style={{ transitionDelay: '150ms' }}>
                <div className="flex flex-col h-full justify-center">
                  <div className="card-3d bg-dark/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-glow-lg text-center">
                    <div className="mb-6 text-accent inline-block mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <p className="text-white text-xl font-bold mb-2">Opt-in Controls</p>
                    <p className="text-white/70">All channels are opt-in with easy unsubscribe options</p>
                  </div>
                </div>
              </div>
              
              {/* Right column with notification channels */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="space-y-6">
                  {[
                    {
                      icon: 'whatsapp',
                      title: 'WhatsApp',
                      desc: 'Instant pings for messages and event reminders to keep you connected on the go'
                    },
                    {
                      icon: 'email',
                      title: 'Email',
                      desc: 'Job alerts, mentorship requests, and approval notifications delivered to your inbox'
                    },
                    {
                      icon: 'app',
                      title: 'In-app',
                      desc: 'Realtime badges, toasts, and notification center for seamless platform experience'
                    }
                  ].map((channel, idx) => (
                    <div 
                      key={idx} 
                      className="card-3d bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 reveal-on-scroll flex items-center gap-6"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <div className="text-accent">
                        {channel.icon === 'whatsapp' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        )}
                        {channel.icon === 'email' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {channel.icon === 'app' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{channel.title}</h3>
                        <p className="text-white/70">{channel.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust & Security section */}
        <section id="security" className="py-24 container mx-auto px-6 scroll-mt-28 bg-grid bg-opacity-5 relative">
          <div className="relative z-10">
            <div className="mb-16 max-w-3xl mx-auto text-center reveal-on-scroll">
              <div className="inline-flex items-center py-1 px-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary mb-6">
                <span className="text-sm font-medium">Enterprise Ready</span>
              </div>
              <SectionTitle accent={true}>Trust & Security</SectionTitle>
              <p className="text-white/80 text-xl leading-relaxed">
                Enterprise-grade security features to keep your alumni data safe
              </p>
            </div>
          
            {/* Security features in a grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: 'auth',
                  title: 'Secure Authentication',
                  desc: 'Modern authentication with session and JWT handling for secure sign-in'
                },
                {
                  icon: 'permission',
                  title: 'Server-Side Permissions',
                  desc: 'Role-based checks performed server-side behind every action'
                },
                {
                  icon: 'data',
                  title: 'Data Control',
                  desc: 'Export and deletion requests honored upon request for full GDPR compliance'
                },
                {
                  icon: 'cookie',
                  title: 'Cookie Consent',
                  desc: 'Transparent analytics with clear opt-in user consent controls'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="card-3d bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 reveal-on-scroll shadow-glow-sm"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-4 text-primary">
                    {item.icon === 'auth' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                    {item.icon === 'permission' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {item.icon === 'data' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    )}
                    {item.icon === 'cookie' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-32 px-6 relative overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-aurora opacity-30 blur-[100px] z-0"></div>
          <div className="bg-grid absolute inset-0 opacity-10"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="card-3d bg-dark/40 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-16 shadow-glow-lg overflow-hidden relative">
              {/* Abstract graphic elements */}
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent opacity-20 blur-[60px] rounded-full -mr-12 -mt-12"></div>
              <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary opacity-20 blur-[60px] rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-8">
                  <span className="text-sm font-medium">Start Your Journey</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-accent mb-6 mt-0 tracking-tight reveal-on-scroll">
                  ForgeCircle: <span className="block mt-2">Campus-to-Career Alumni Hub</span>
                </h2>
                
                <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light reveal-on-scroll" style={{ transitionDelay: '60ms' }}>
                  Forge Circle helps you build an engaged alumni community with curated events, groups, jobs, and more.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
                  <Link
                    href="/demo"
                    className="group flex items-center justify-center px-8 py-4 md:py-5 md:text-xl text-white font-medium bg-accent hover:bg-accent-light rounded-xl transition-all duration-300 shadow-glow-sm hover:shadow-glow-lg"
                  >
                    <span>Request demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-8 py-4 md:py-5 md:text-xl text-white font-medium bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/30"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile sticky CTA ribbon */}
        <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%]">
          <div className="card-3d backdrop-blur-md bg-dark/80 px-4 py-3.5 flex items-center justify-between shadow-glow-sm border border-white/10 rounded-xl">
            <div className="text-white/90 text-sm font-medium">Ready to see it live?</div>
            <div className="flex gap-2">
              <a href="/contact" className="py-1.5 px-3 text-sm text-white/90 hover:text-white transition-colors">Contact</a>
              <a href="/demo" className="bg-accent hover:bg-accent-light transition-colors rounded-lg py-1.5 px-3 text-sm text-white font-medium">Demo</a>
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}
