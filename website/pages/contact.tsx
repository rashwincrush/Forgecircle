import { useState, FormEvent } from 'react';
import SeoHead from '../components/SeoHead';

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const [error, setError] = useState<string>('');
  const PHONE = '+916369126439';

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setStatus('submitting');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);

    try {
      const msgLines = [
        'New Contact Submission (ForgeCircle)',
        `Full name: ${data.name || ''}`,
        `Phone: ${data.phone || ''}`,
        `College: ${data.college || ''}`,
        `Address: ${data.address || ''}`,
        `Designation: ${data.designation || ''}`,
        `Work email: ${data.email || ''}`,
        `Message: ${data.message || ''}`,
      ];
      const message = msgLines.join('\n');
      const wa = `https://wa.me/${PHONE.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(wa, '_blank');
      setStatus('success');
      form.reset();
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      setStatus('error');
    }
  }

  return (
    <>
      <SeoHead title="Contact Us — ForgeCircle" description="Get in touch with the ForgeCircle team." />
      <main className="container">
        <h1>Contact us</h1>
        <p className="lead">Have a question about ForgeCircle? Send us a message and we'll get back within 1 business day.</p>

        <form className="form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" required placeholder="Jane Doe" className="text-black placeholder:text-slate-500" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" required placeholder="+91 63691 26439" pattern="[0-9+()\-\s]{7,}" className="text-black placeholder:text-slate-500" />
          </div>
          <div className="field">
            <label htmlFor="college">College name</label>
            <input id="college" name="college" type="text" required placeholder="Acme University" className="text-black placeholder:text-slate-500" />
          </div>
          <div className="field">
            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" rows={3} required placeholder="Street, City, State/Province, Country" className="text-black placeholder:text-slate-500" />
          </div>
          <div className="field">
            <label htmlFor="designation">Designation</label>
            <input id="designation" name="designation" type="text" required placeholder="Alumni Relations Manager" className="text-black placeholder:text-slate-500" />
          </div>
          <div className="field">
            <label htmlFor="email">Work email (optional)</label>
            <input id="email" name="email" type="email" placeholder="jane@company.com" className="text-black placeholder:text-slate-500" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} placeholder="Tell us a bit more..." className="text-black placeholder:text-slate-500" />
          </div>
          {/* Simple honeypot */}
          <input type="text" name="company_website" style={{display:'none'}} tabIndex={-1} autoComplete="off" />

          <div className="actions">
            <button className="btn" type="submit" disabled={status==='submitting'}>
              {status==='submitting' ? 'Sending…' : 'Send message'}
            </button>
          </div>

          {status==='success' && <p className="success" role="status">Thanks! Your message has been sent.</p>}
          {status==='error' && <p className="error" role="alert">{error || 'Unable to send right now.'}</p>}
        </form>
      </main>
    </>
  );
}
