import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SeoHead from './SeoHead';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children, title, description }: LayoutProps) {
  // Add scroll reveal effect for premium animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((element) => {
        const elementPosition = (element as HTMLElement).getBoundingClientRect().top;
        if (elementPosition < windowHeight - 100) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Initial check to reveal visible elements
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden dark bg-darker text-white">
      {/* Premium background effects */}
      <div className="fixed inset-0 z-0 opacity-50">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-dark to-darker"></div>
        
        {/* Animated mesh background */}
        <div className="bg-mesh"></div>
        
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')",
          backgroundRepeat: 'repeat',
        }}></div>
      </div>
      
      <div className="flex min-h-screen flex-col relative z-10">
        <SeoHead title={title} description={description} />
        <Header />
        
        {/* Main content with padding for fixed header */}
        <main className="flex-grow pt-20">{children}</main>
        
        <Footer />
      </div>
    </div>
  );
}
