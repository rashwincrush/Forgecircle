import { useState, FormEvent } from 'react';
import SeoHead from '../components/SeoHead';

export default function Demo() {
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
        'New Demo Request (ForgeCircle)',
        `Full name: ${data.name || ''}`,
        `Phone: ${data.phone || ''}`,
        `College: ${data.college || ''}`,
        `Address: ${data.address || ''}`,
        `Designation: ${data.designation || ''}`,
        `Work email: ${data.email || ''}`,
        `Community size: ${data.size || ''}`,
        `Use-case: ${data.usecase || ''}`,
        `Timeframe: ${data.timeframe || ''}`,
        `Additional: ${data.message || ''}`,
      ];
      const message = msgLines.join('\n');
      const wa = `https://wa.me/${PHONE.replace(/[^\\d]/g, '')}?text=${encodeURIComponent(message)}`;
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
      <SeoHead title="Book a Demo — ForgeCircle" description="Request a live demo of ForgeCircle." />
      <main className="container">
        <h1>Book a demo</h1>
        <p className="lead">Tell us a little about your organization and we'll schedule a personalized walkthrough.</p>

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
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" required placeholder="jane@company.com" className="text-black placeholder:text-slate-500" />
          </div>
          <div className="field">
            <label htmlFor="size">Community size</label>
            <select id="size" name="size" required className="text-black">
              <option value="">Select</option>
              <option>1-200</option>
              <option>201-1,000</option>
              <option>1,001-10,000</option>
              <option>10,001+</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="usecase">Primary use-case</label>
            <input id="usecase" name="usecase" type="text" placeholder="Alumni engagement, events, giving..." className="text-black placeholder:text-slate-500" />
          </div>
          <div className="field">
            <label htmlFor="timeframe">Evaluation timeframe</label>
            <select id="timeframe" name="timeframe" className="text-black">
              <option value="">Select</option>
              <option>ASAP</option>
              <option>0-3 months</option>
              <option>3-6 months</option>
              <option>6+ months</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Additional context</label>
            <textarea id="message" name="message" rows={6} placeholder="Share any requirements or questions..." className="text-black placeholder:text-slate-500" />
          </div>
          {/* Simple honeypot */}
          <input type="text" name="company_website" style={{display:'none'}} tabIndex={-1} autoComplete="off" />

          <div className="actions">
            <button className="btn" type="submit" disabled={status==='submitting'}>
              {status==='submitting' ? 'Submitting…' : 'Request demo'}
            </button>
          </div>

          {status==='success' && <p className="success" role="status">Thanks! We'll reach out shortly to schedule your demo.</p>}
          {status==='error' && <p className="error" role="alert">{error || 'Unable to submit right now.'}</p>}
        </form>
      </main>
    </>
  );
}
