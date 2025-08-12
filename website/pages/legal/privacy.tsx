import SeoHead from '../../components/SeoHead';

export default function Privacy() {
  return (
    <>
      <SeoHead title="Privacy Policy — AlumniForge" description="How we collect, use, and protect your information." />
      <main className="container">
        <section className="hero">
          <h1>Privacy Policy</h1>
          <p className="subtle">We respect your privacy. This page summarizes what we collect, how we use it, and your choices.</p>
        </section>

        <section style={{marginTop:24}}>
          <h2>What we collect</h2>
          <ul>
            <li>Account info (name, email) you provide.</li>
            <li>Usage data to improve product experience.</li>
            <li>Support communications you send us.</li>
          </ul>
        </section>

        <section style={{marginTop:24}}>
          <h2>How we use it</h2>
          <ul>
            <li>To provide and secure the service.</li>
            <li>To improve features and fix issues.</li>
            <li>To communicate updates and support.</li>
          </ul>
        </section>

        <section style={{marginTop:24}}>
          <h2>Your choices</h2>
          <ul>
            <li>Access, update, or delete your data by contacting us.</li>
            <li>Opt out of non-essential communications.</li>
          </ul>
        </section>

        <section style={{marginTop:24}}>
          <div className="card" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1rem'}}>
            <div>
              <h3 style={{margin:0}}>Questions about privacy?</h3>
              <p className="subtle" style={{margin:0}}>We’re happy to help and provide more detail.</p>
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
