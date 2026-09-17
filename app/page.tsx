import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { TrustBadges } from "@/components/TrustBadges";
import { Partnership } from "@/components/Partnership";
import { Benefits } from "@/components/Benefits";
import { Investors } from "@/components/Investors";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { IntakeForm } from "@/components/IntakeForm";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <TrustBadges />
        <Partnership />
        <Benefits />
        <Investors />
        <Testimonials />
        <CtaBand />
        <IntakeForm />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
