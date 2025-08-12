import SeoHead from '../components/SeoHead';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <SeoHead
        title="Premium Alumni Platform for Schools & Universities"
        description="Connect, engage, and build stronger alumni communities with ForgeCircle's all-in-one premium platform for schools and universities."
      />
      {/* Hero Section with premium animations & gradients */}
      <section className="relative py-28 md:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-24 left-12 w-72 h-72 bg-primary/25 rounded-full blur-[80px] opacity-70"></div>
          <div className="absolute bottom-24 right-12 w-96 h-96 bg-secondary/15 rounded-full blur-[96px] opacity-70 hidden md:block"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Hero Content */}
            <div className="md:w-1/2 space-y-8 text-center md:text-left">
              <div className="inline-flex hero-badge">
                <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-accent mr-2"></span>
                Launched 2025
              </div>
              
              <h1 className="reveal-on-scroll font-extrabold">
                <span className="block bg-gradient-to-r from-white to-light/90 bg-clip-text text-transparent">
                  Launch your alumni network—fast
                </span>
              </h1>
              
              <p className="text-white/75 text-lg md:text-xl max-w-xl md:max-w-2xl reveal-on-scroll">
                Groups, events, directory, messaging, and realtime notifications in one clean platform.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start reveal-on-scroll">
                <Link href="/demo" className="btn-primary">
                  <span>Book a demo</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16797 10H15.8346" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.834 5L15.834 10L10.834 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/demo" className="btn-secondary">
                  Get started
                </Link>
              </div>
              
              {/* Trust elements */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="trust-item">
                  <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className="trust-item">
                  <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>GDPR Compliant</span>
                </div>
                <div className="trust-item">
                  <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
            
            {/* Hero Mockups with floating animation */}
            <div className="md:w-1/2 relative h-96">
              {/* These would typically be real screenshots - using colored placeholders for now */}
              <div className="floating-mockup mockup-1">
                <div className="glass rounded-2xl p-4 md:p-5 w-64">
                  <div className="flex items-center gap-2 text-white/90 font-semibold mb-4">
                    <span className="text-lg" aria-hidden>🧠</span>
                    <span>Mentors Matching Algorithm</span>
                  </div>
                  <div className="h-16 rounded-xl bg-white/10"></div>
                </div>
              </div>
              
              <div className="floating-mockup mockup-2">
                <div className="glass rounded-2xl p-4 md:p-5 w-64">
                  <div className="flex items-center gap-2 text-white/90 font-semibold mb-4">
                    <span className="text-lg" aria-hidden>💬</span>
                    <span>Live Messaging</span>
                  </div>
                  <div className="h-16 rounded-xl bg-white/10"></div>
                </div>
              </div>
              
              <div className="floating-mockup mockup-3">
                <div className="glass rounded-2xl p-4 md:p-5 w-64">
                  <div className="flex items-center gap-2 text-white/90 font-semibold mb-4">
                    <span className="text-lg" aria-hidden>📅</span>
                    <span>Smart Events</span>
                  </div>
                  <div className="h-16 rounded-xl bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section with Glassmorphism Cards */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-light/90 bg-clip-text text-transparent reveal-on-scroll">
              Everything You Need for Alumni Engagement
            </h2>
            <p className="text-white/70 text-lg reveal-on-scroll">
              Our comprehensive suite of tools helps you create meaningful connections and drive engagement across your entire alumni network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="glass-card reveal-on-scroll">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-r from-primary to-secondary mb-6">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Alumni Directory & Networking
              </h3>
              <p className="text-white/70 mb-5">
                Searchable directory with rich profiles, messaging, and professional networking tools to help alumni connect.
              </p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="glass-card reveal-on-scroll" style={{animationDelay: '100ms'}}>
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-r from-primary to-secondary mb-6">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Events & Reunions
              </h3>
              <p className="text-white/70 mb-5">
                Organize, promote, and manage events with integrated ticketing, RSVPs, and attendance tracking.
              </p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="glass-card reveal-on-scroll" style={{animationDelay: '200ms'}}>
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-r from-primary to-secondary mb-6">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Fundraising & Giving
              </h3>
              <p className="text-white/70 mb-5">
                Powerful donation management with campaigns, recurring giving, and detailed donor analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-light/90 bg-clip-text text-transparent">Who It’s For</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Alumni networks, institutions, and associations that want a modern, easy way to engage members, run events, and grow careers—without juggling multiple tools.
          </p>
        </div>
      </section>


      {/* Pricing */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-white to-light/90 bg-clip-text text-transparent text-center">Simple & Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="premium-card">
              <h3 className="text-2xl font-bold mb-3">Basic</h3>
              <p className="text-dark/70 mb-4">Groups, Events (timezone), Directory, Messaging, Notifications</p>
              <Link href="/demo" className="btn-primary w-full">Get started</Link>
            </div>
            <div className="premium-card">
              <h3 className="text-2xl font-bold mb-3">Pro</h3>
              <p className="text-dark/70 mb-4">Everything in Basic + Admin controls, Jobs & Mentorship</p>
              <Link href="/demo" className="btn-primary w-full">Start Pro</Link>
            </div>
            <div className="premium-card">
              <h3 className="text-2xl font-bold mb-3">Enterprise</h3>
              <p className="text-dark/70 mb-4">Everything in Pro + custom domain & priority support</p>
              <Link href="/contact" className="btn-primary w-full">Talk to sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CTA kept simple */}
      <section className="py-12">
        <div className="container text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            <Link href="/demo" className="btn-primary">See it live — Book a demo</Link>
            <Link href="/demo" className="btn-secondary">Ready to try? — Get started</Link>
          </div>
        </div>
      </section>
      
      {/* Premium Features Showcase */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-light/90 bg-clip-text text-transparent reveal-on-scroll">
              Advanced Platform Features
            </h2>
            <p className="text-white/70 text-lg reveal-on-scroll">
              Built with the latest technology to deliver a seamless, secure, and scalable alumni experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: "Mobile-First Design",
                description: "Fully responsive interface that works beautifully across all devices with dedicated mobile apps.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                delay: "0ms"
              },
              {
                title: "Analytics Dashboard",
                description: "Comprehensive insights into engagement metrics, donation patterns, and event success rates.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                delay: "200ms"
              },
              {
                title: "Enterprise-Grade Security",
                description: "SOC 2 Type II compliant with advanced encryption, role-based access, and regular security audits.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                delay: "300ms"
              },
              {
                title: "Global Scalability",
                description: "Built on cloud infrastructure that scales seamlessly from small schools to large universities.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                delay: "400ms"
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card reveal-on-scroll" style={{animationDelay: feature.delay}}>
                <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-r from-primary to-secondary mb-5">
                  {/* Standardized icon size */}
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 mb-4 max-w-prose">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner with Glassmorphism */}
      <section className="container relative py-24 md:py-28">
        <div className="absolute inset-0 mx-auto w-4/5 h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-secondary/15 rounded-full blur-[96px]"></div>
        </div>
        
        <div className="glass-card border border-white/10 relative overflow-hidden p-10 md:p-16 text-center rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent reveal-on-scroll">
              Ready to Transform Your Alumni Engagement?
            </h2>
            
            <p className="text-white/70 text-lg md:text-xl mb-10 reveal-on-scroll">
              Join hundreds of leading institutions using ForgeCircle to build stronger, more engaged communities.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link href="/demo" className="btn-primary btn-lg">
                <span>Schedule a Demo</span>
                <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16797 10H15.8346" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.834 5L15.834 10L10.834 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              
              <Link href="/contact" className="btn-secondary">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
