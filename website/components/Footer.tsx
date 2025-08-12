import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative border-t border-slate-800 bg-slate-950 text-slate-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/40 before:to-transparent before:content-['']"
      role="contentinfo"
    >
      {/* Main footer content */}
      <div className="container mx-auto px-4 pb-10 pt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand + Social */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-secondary text-white grid place-items-center font-bold">FC</div>
              <div>
                <div className="text-lg font-bold text-white">ForgeCircle</div>
                <p className="text-sm text-slate-400">Build thriving alumni networks and communities.</p>
              </div>
            </div>

            <div className="mt-4 text-xs sm:text-sm text-slate-400 space-y-1">
              <p>
                Developed by{' '}
                <a href="https://forgeash.in" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white underline underline-offset-4">
                  ForgeAsh Technologies
                </a>
              </p>
              <address className="not-italic leading-relaxed">
                Plot No 15, Hindu Colony 2nd Main Rd,<br />
                Hindu Colony, Ullagaram, Madipakkam,<br />
                Chennai, Tamil Nadu 600091
              </address>
              <p>
                Phone: <a href="tel:+916369126439" className="hover:text-white">+91 63691 26439</a>
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://x.com"
                aria-label="X"
                className="rounded-md p-2 text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M18.244 2H21l-6.51 7.44L22 22h-6.9l-4.53-5.86L4.36 22H2l7.07-8.08L2 2h6.9l4.18 5.41L18.244 2Zm-2.42 18h2.38L8.29 4H5.91l9.914 16Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="rounded-md p-2 text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5ZM4.75 8.75h4.38V21H4.75Zm7.28 0h4.2v1.68h.06a4.6 4.6 0 0 1 4.15-2.28c4.44 0 5.26 2.92 5.26 6.71V21h-4.38v-5.47c0-1.3 0-2.98-1.81-2.98-1.83 0-2.11 1.43-2.11 2.9V21h-4.36Z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="rounded-md p-2 text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 7.1c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.59 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.52-.01 2.86 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <nav aria-label="Product" className="md:col-span-3 lg:col-span-3 text-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Product</div>
            <ul className="mt-3 space-y-2">
              <li><Link className="transition hover:text-white" href="/product#overview">Overview</Link></li>
              <li><Link className="transition hover:text-white" href="/product#highlights">Features</Link></li>
              <li><Link className="transition hover:text-white" href="/demo">Demo</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="md:col-span-2 lg:col-span-2 text-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Company</div>
            <ul className="mt-3 space-y-2">
              <li><Link className="transition hover:text-white" href="/">Home</Link></li>
              <li><Link className="transition hover:text-white" href="/legal/privacy">Privacy</Link></li>
              <li><Link className="transition hover:text-white" href="/legal/terms">Terms</Link></li>
              <li><Link className="transition hover:text-white" href="/legal/dpa">DPA</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Contact</div>
            <div className="mt-3 space-y-2 text-sm">
              <a className="block transition hover:text-white" href="tel:+916369126439">+91 63691 26439</a>
              <a
                className="block transition hover:text-white"
                href="https://maps.google.com/?q=Plot%20No%2015%2C%20Hindu%20Colony%202nd%20Main%20Rd%2C%20Hindu%20Colony%2C%20Ullagaram%2C%20Madipakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600091"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
              <a className="block transition hover:text-white" href="https://forgeash.in" target="_blank" rel="noopener noreferrer">ForgeAsh.in</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {year} ForgeCircle. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link className="transition hover:text-white" href="/">Home</Link>
              <Link className="transition hover:text-white" href="/contact">Contact</Link>
              <a className="transition hover:text-white" href="https://forgeash.in" target="_blank" rel="noopener noreferrer">ForgeAsh.in</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
