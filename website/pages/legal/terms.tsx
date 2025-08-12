import SeoHead from '../../components/SeoHead';

export default function Terms() {
  return (
    <>
      <SeoHead title="Terms of Service — AlumniForge" description="Key terms governing use of the AlumniForge service." />
      <main className="container">
        <section className="hero">
          <h1>Terms of Service</h1>
          <p className="subtle">A concise overview of how you can use AlumniForge and our responsibilities as your provider.</p>
        </section>

        <section style={{marginTop:24}}>
          <h2>Using the service</h2>
          <ul>
            <li>You must be authorized to create and manage your alumni community.</li>
            <li>You agree not to misuse the platform or attempt to bypass security.</li>
            <li>You’re responsible for your content and compliance with applicable laws.</li>
          </ul>
        </section>

        <section style={{marginTop:24}}>
          <h2>Our responsibilities</h2>
          <ul>
            <li>We provide the service with reasonable skill and care.</li>
            <li>We maintain appropriate technical and organizational safeguards.</li>
            <li>We’ll communicate maintenance and incidents transparently.</li>
          </ul>
        </section>

        <section style={{marginTop:24}}>
          <h2>Accounts & billing</h2>
          <ul>
            <li>Plans are billed per the pricing page; upgrades and downgrades may prorate.</li>
            <li>Fees are non-refundable except where required by law.</li>
          </ul>
        </section>

        <section style={{marginTop:24}}>
          <div className="card" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1rem'}}>
            <div>
              <h3 style={{margin:0}}>Questions about our terms?</h3>
              <p className="subtle" style={{margin:0}}>We’re happy to clarify anything before you get started.</p>
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
