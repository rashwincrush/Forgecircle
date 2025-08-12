import SeoHead from '../../components/SeoHead';

export default function DPA() {
  return (
    <>
      <SeoHead title="Data Processing Addendum — AlumniForge" description="High-level overview of our DPA and how to request a signed copy." />
      <main className="container">
        <section className="hero">
          <h1>Data Processing Addendum (DPA)</h1>
          <p className="subtle">We offer a standard DPA covering roles, data handling, security measures, and sub‑processors. Request a signed copy below.</p>
        </section>

        <section style={{marginTop:24}}>
          <h2>At a glance</h2>
          <ul>
            <li>Defines controller/processor roles and responsibilities.</li>
            <li>Describes types of personal data and processing purposes.</li>
            <li>Outlines technical and organizational security measures.</li>
            <li>Documents sub‑processor management and notifications.</li>
            <li>Includes data subject rights assistance and deletion/return.</li>
          </ul>
        </section>

        <section style={{marginTop:24}}>
          <div className="card" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1rem'}}>
            <div>
              <h3 style={{margin:0}}>Need a signed DPA?</h3>
              <p className="subtle" style={{margin:0}}>We’ll share the latest template and routing for e‑signature.</p>
            </div>
            <div style={{display:'flex', gap:12}}>
              <a className="btn" href="/contact">Contact us</a>
              <a className="btn btn-secondary" href="/demo">Book a demo</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
