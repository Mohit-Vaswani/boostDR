import { Sparkle, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="hero-gradient min-h-screen">
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}

          {/* Subscription Badge */}
          <div className="subscription-badge mb-8 sm:my-12 font-semibold">
            <Sparkle />
            Affordable One-Time Price
          </div>

          {/* Hero Content */}
          <h1 className="oswald tracking-wide text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 max-w-4xl">
          Boost Your Domain Rating with 200+ Trusted Directories
          </h1>

          <p className="text-lg md:text-xl mt-4 mb-12 max-w-2xl font-medium">
            Get instant access to 200+ high domain rating websites & directories where you can submit your SaaS, AI tools, and websites to increase authority, backlinks & traffic.
          </p>

          {/* Features */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 justify-center text-left font-medium">
            <div className="flex sm:items-center gap-2">
              <Zap className="text-yellow-500" size={20} />
              <span>Save Hours on Research</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-500" size={20} />
              <span>Boost SEO & Domain Rating Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-500" size={20} />
              <span>Get Featured in Top Niches</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="#pricing" className="custom-button text-lg mb-4">
            Get Access to Database
          </Link>
          <p>{`Join the First 20 & Save 30% (only 9 left)`}</p>

          {/* Responsive YouTube Video */}
          <div className="relative w-full aspect-video border-4 border-gray-500 rounded-2xl mt-16 overflow-hidden">
            <Image src="/boostdr.png" alt="Database" fill className="object-cover" />
          </div>

          {/* <Link
            href={`https://x.com/abigayleryuwei/status/1896635840123875669`}
            target="_blank"
            className="flex flex-col gap-5 mt-20 hover:scale-105 duration-300"
          >
            <span className="flex gap-3 items-end">
              <VscQuote size={30} />
              <p className="text-xl"> love it</p>
            </span>
            <span className="flex gap-4 items-center">
              <Image
                src="/review.jpg"
                alt="user review"
                width={50}
                height={50}
                className="rounded-full border-4 border-black"
              />
              <span className="flex items-start flex-col">
                <p className="text-lg font-semibold">Abigayle Peterson</p>
                <p>founder</p>
              </span>
            </span>
          </Link> */}
        </div>
      </div>
    </main>
  );
}
