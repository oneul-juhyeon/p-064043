
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";

const CompanyBrandSection: React.FC = () => {
  return (
    <div className="w-full mb-16 opacity-0 scroll-animate">
      <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-white">
        <Heart className="mr-3 h-6 w-6 text-red-500" />
        Our Values
      </h2>
      
      <div className="space-y-12 mt-6">
        <div className="bg-[#0c0c24] p-8 rounded-lg border border-red-900/30 shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-white">Brand Definition</h3>
          <p className="text-lg text-gray-200">A company that drives change in financial markets through technological innovation.</p>
        </div>
        
        <Separator className="bg-red-900/30 my-8" />
        
        <div className="bg-[#0c0c24] p-8 rounded-lg border border-red-900/30 shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-white">Key Brand Statement</h3>
          <p className="text-xl font-bold italic text-white text-center">
            Without Love, We are nothing.
          </p>
        </div>
        
        <Separator className="bg-red-900/30 my-8" />
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Core Values</h3>
        </div>
      </div>
    </div>
  );
};

export default CompanyBrandSection;
