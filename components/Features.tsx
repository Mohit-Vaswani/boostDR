// 'use client';

import { MdOutlineVerified } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { LuChartSpline } from "react-icons/lu";
import { LuScanSearch } from "react-icons/lu";

const Features = () => {
  return (
    <div className="bg-[#FDF6EC] text-black text-center mt-12">
      <h1 className="text-3xl md:text-5xl font-bold">
      What’s  <span className="underline decoration-yellow-300">Inside?</span> 
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 w-full mx-auto">
        <div className="bg-[#FFD66B] p-12 shadow-md border border-black">
          <MdOutlineVerified className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-bold">200+ High DR Websites</h2>
          <p className="mt-2 text-sm">Carefully researched & verified to boost backlinks.</p>
        </div>

        <div className="bg-[#4ADE80] p-12 shadow-md border border-black">
          <FaUsersViewfinder className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-bold">AI Tools / SaaS Directories</h2>
          <p className="mt-2 text-sm">Perfect places to submit your product & attract users.</p>
        </div>

        <div className="bg-[#4ADE80] p-12 shadow-md border border-black">
          <LuChartSpline className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-bold">SEO & Growth Boost</h2>
          <p className="mt-2 text-sm">Increase rankings and traffic with authoritative backlinks.</p>
        </div>

        <div className="bg-[#FFD66B] p-12 shadow-md border border-black">
          <LuScanSearch className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-bold">Easy Search & Filter</h2>
          <p className="mt-2 text-sm">Find the best sites for your niche instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
