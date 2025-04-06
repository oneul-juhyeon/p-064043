
import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";
import OilWhatIs from "./sections/OilWhatIs";
import OilMarket from "./sections/OilMarket";
import OilTradingWorks from "./sections/OilTradingWorks";
import OilWhyTrade from "./sections/OilWhyTrade";
import OilAdvantages from "./sections/OilAdvantages";
import OilDisadvantages from "./sections/OilDisadvantages";
import OilTrading from "./sections/OilTrading";
import OilHowToTrade from "./sections/OilHowToTrade";
import OilTradingStrategies from "./sections/OilTradingStrategies";
import OilFAQ from "./sections/OilFAQ";

const OilArticleContent: React.FC = () => {
  return (
    <article className="mx-auto">
      <div className="max-w-3xl mx-auto text-left">
        <FinancialProductArticleHeader title="What is Oil trading and how to trade Oil?" />
        
        <div className="prose max-w-none 
          prose-headings:font-bold 
          prose-headings:text-white 
          prose-p:text-gray-300 
          prose-p:leading-relaxed 
          prose-li:text-gray-300 
          prose-strong:text-white
          prose-table:text-gray-300
          prose-th:text-white
          prose-td:text-gray-300
          prose-a:text-blue-400
          prose-a:hover:text-blue-300">
          <OilWhatIs />
          <OilMarket />
          <OilTradingWorks />
          <OilWhyTrade />
          <OilAdvantages />
          <OilDisadvantages />
          <OilTrading />
          <OilHowToTrade />
          <OilTradingStrategies />
          <OilFAQ />
        </div>
      </div>
    </article>
  );
};

export default OilArticleContent;
