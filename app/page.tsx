import Benefits from "@/components/Benefits";
import FAQSection from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PricingCard from "@/components/Pricing";

export default function Home() {
  return (
    <main className="bg-[#FDF6EC]">
     <Hero/> 
     <Benefits/>
     {/* <Solo/> */}
     <Features/>
     <PricingCard/>           
     <FAQSection/>
     <Footer/>
    </main>
  );
}
