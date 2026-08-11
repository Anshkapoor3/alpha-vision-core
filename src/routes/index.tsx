import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { Nav } from "@/components/alpha/Nav";
import { Hero } from "@/components/alpha/Hero";
import { GlobalImpact } from "@/components/alpha/GlobalImpact";
import { Services } from "@/components/alpha/Services";
import { Journey } from "@/components/alpha/Journey";
import { Industries } from "@/components/alpha/Industries";
import { Ecosystem } from "@/components/alpha/Ecosystem";
import { CaseStudies } from "@/components/alpha/CaseStudies";
import { WhyAlpha } from "@/components/alpha/WhyAlpha";
import { Testimonials } from "@/components/alpha/Testimonials";
import { Contact } from "@/components/alpha/Contact";
import { Footer } from "@/components/alpha/Footer";

const title = "Alpha ITMS — Transforming Businesses Through Intelligent Technology";
const description =
  "Alpha ITMS delivers enterprise-grade IT solutions, AI-powered automation, cloud services, software development, cybersecurity, and digital transformation to help organizations innovate, scale, and stay ahead.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Alpha IT Managed Services",
          description,
          areaServed: "Global",
          sameAs: ["https://alphaitms.com"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div className="relative">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left [background:var(--gradient-brand)]"
        aria-hidden
      />
      <Nav />
      <main>
        <Hero />
        <GlobalImpact />
        <Services />
        <Journey />
        <Industries />
        <Ecosystem />
        <CaseStudies />
        <WhyAlpha />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
