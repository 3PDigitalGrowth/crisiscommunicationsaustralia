import AnnualSummitBanner from "@/components/AnnualSummitBanner";
import { AuthorityBar } from "@/components/AuthorityBar";
import CaseStudies from "@/components/CaseStudies";
import CrisisPreventionCallout from "@/components/CrisisPreventionCallout";
import { DifferentiationSection } from "@/components/DifferentiationSection";
import FAQSection from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LeadMagnetModalProvider } from "@/components/LeadMagnetModalProvider";
import { LyallMercerSection } from "@/components/LyallMercerSection";
import MobileCallBar from "@/components/MobileCallBar";
import { ProblemSection } from "@/components/ProblemSection";
import { Testimonials } from "@/components/Testimonials";
import { TwoPathSection } from "@/components/TwoPathSection";
import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.brand.name,
  description: siteConfig.seo.description,
  url: siteConfig.brand.siteUrl,
  telephone: siteConfig.phone.display,
  areaServed: ["AU", "NZ", "PG", "FJ", "US", "CA"],
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.address.company,
    url: siteConfig.links.crcPrUrl,
    foundingDate: "2010",
  },
  founder: {
    "@type": "Person",
    name: "Lyall Mercer",
    url: siteConfig.links.lyallMercerUrl,
    sameAs: [
      siteConfig.links.lyallMercerUrl,
      siteConfig.links.lyallLinkedIn,
      siteConfig.links.lyallTwitter,
    ],
    jobTitle: "Founder & Principal Adviser",
    description:
      "Former journalist and Australasia's leading crisis communications adviser. Over 25 years advising companies, governments, and organisations across Australia, the Pacific, and internationally.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Crisis Communications Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Urgent Crisis Communications Consulting",
          description:
            "24/7 crisis communications advisory from CRC PR. Immediate response for media management, reputation protection, issues management, and crisis coordination.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "My PR Partner Crisis Masterclass",
          description:
            "Practical crisis communications training for professionals and organisations. 12-month curriculum backed by CRC PR's 25-year consulting practice.",
          offers: {
            "@type": "Offer",
            price: "340",
            priceCurrency: "AUD",
            billingIncrement: "P1M",
          },
        },
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faqs.items.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.schemaAnswer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LeadMagnetModalProvider>
        <main>
          <Hero />
          <AuthorityBar />
          <ProblemSection />
          <TwoPathSection />
          <CrisisPreventionCallout />
          <LyallMercerSection />
          <CaseStudies />
          <Testimonials />
          <AnnualSummitBanner />
          <DifferentiationSection />
          <FinalCTA />
          <FAQSection />
        </main>
        <Footer />
        <MobileCallBar />
      </LeadMagnetModalProvider>
    </>
  );
}
