import React from "react";
import { Check, X } from "lucide-react";

const Benefits = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Why Choose <span className="underline decoration-yellow-300">BoostDR?</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Without DR Database: */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-red-700">
            Without DR Database:
          </h3>
          <ul className="space-y-3 text-red-700">
            {["Wasting time Googling random directories",
              "Submitting to low-quality or spammy sites",
              "Paying $$$ to SEO agencies for the same info",
              "Other databases charge recurring fees"].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <X className="w-6 h-6 text-red-500" />
                  <span>{item}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* With BoostDR */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
          With DR Database:
          </h3>
          <ul className="space-y-3 text-green-700">
            {["200+ vetted high DR directories",
              "Ready-to-submit links & instructions",
              "AI / SaaS / Startup specific directories included",
              "Quick DR & SEO growth boost"].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-6 h-6 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
