import { CheckCircle } from "lucide-react";
import Link from "next/link";

const PricingCard = () => {
  return (
    <div id="pricing" className="flex flex-col items-center bg-[#fdf8ec] py-12 px-4 mt-12">
      <h2 className="text-3xl text-center md:text-5xl font-bold mb-10">
        One <span className="underline decoration-yellow-300">price</span>, Lifetime Access.
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-2 sm:p-6 w-full flex flex-col items-center justify-center max-w-lg border-2 border-black">
        <h3 className="text-xl font-semibold text-center">Launch Price</h3>
        <span className="flex flex-row-reverse items-center gap-2 my-3">
        <p className="text-center text-2xl text-gray-500 line-through">$49</p>
        <p className="text-center text-4xl font-bold text-black">$19</p>
        </span>
        <Link href={`https://dub.sh/boostdr`} className="custom-button text-lg">Get Instant Access</Link>
        <div className="mt-6 bg-yellow-200 p-2 sm:p-4 rounded-lg border-2 border-black w-full">
          <h4 className="font-semibold mb-2">What&apos;s Included:</h4>
          <ul className="space-y-2">
            {[
              "200+ High DR Directories",
              "AI & SaaS Specific Listings",
              "Growth & SEO Boost",
              "Submission Links",
              "Website Links",
              "Future Updates",
              "Lifetime Access",
            ].map((item, index) => (
              <li key={index} className="flex text-sm sm:text-base items-center text-black">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                {/* {`- `} */}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
