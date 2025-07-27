import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import TargetAudience from "@/components/sections/target-audience";
import Security from "@/components/sections/security";
import TechStack from "@/components/sections/tech-stack";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 font-medium">Trusted by leading alumni networks worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">Harvard Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">MIT Network</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">Stanford Connect</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">Oxford Society</div>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <TargetAudience />
      <Security />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
