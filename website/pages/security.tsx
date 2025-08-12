import SeoHead from '../components/SeoHead';

export default function Security() {
  return (
    <>
      <SeoHead title="Security — ForgeCircle" description="High-level overview of our authentication, access controls, isolation, realtime infrastructure, and hosting." />
      <main className="container">
        <section className="hero">
          <h1>Security by design</h1>
          <p className="subtle">How ForgeCircle keeps your alumni network safe—no vendor names or sensitive implementation details.</p>
          <div style={{display:'flex', gap:12, marginTop:16}}>
            <a className="btn" href="/contact">Get started</a>
            <a className="btn btn-secondary" href="/demo">Book a demo</a>
          </div>
        </section>

        <section style={{marginTop:24}}>
          <ul>
            <li><b>Secure sign‑in</b>: Modern authentication with session/JWT handling.</li>
            <li><b>Access controls</b>: Server‑side permission checks back every UI action.</li>
            <li><b>Data scoped per user</b>: Users only see what they’re allowed to see.</li>
            <li><b>Realtime infrastructure</b>: Stable channels with reconnect/backoff logic.</li>
            <li><b>Cloud‑hosted</b>: Frontend and database hosted on reliable cloud infrastructure.</li>
          </ul>
          <p className="subtle">Intentionally no vendor names, no schema details, no policy names.</p>
        </section>

        <section style={{marginTop:24}}>
          <div className="card" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1rem'}}>
            <div>
              <h3 style={{margin:0}}>Want a deeper dive?</h3>
              <p className="subtle" style={{margin:0}}>We can walk through architecture and controls on a live call.</p>
            </div>
            <div style={{display:'flex', gap:12}}>
              <a className="btn" href="/demo">Book a demo</a>
              <a className="btn btn-secondary" href="/contact">Contact security</a>
            </div>
          </div>
        </section>

        <p className="subtle" style={{marginTop:16}}>See legal terms: <a href="/legal/privacy">Privacy Policy</a>, <a href="/legal/terms">Terms</a>, and <a href="/legal/dpa">DPA</a>.</p>
      </main>
    </>
  );
}
