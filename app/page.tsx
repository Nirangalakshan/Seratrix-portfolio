import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Technology from "@/app/components/Technology";
import Impact from "@/app/components/Impact";
import Vision from "@/app/components/Vision";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Technology />
      <Impact />
      <Vision />
      <Contact />
    </main>
  );
}
