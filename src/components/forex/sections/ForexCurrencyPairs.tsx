
import React from "react";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";

const ForexCurrencyPairs: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What are the main forex currency pairs to trade?</h2>
      
      {/* Currency Pairs Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex8.png" 
          alt="Forex Currency Pairs" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        The most well-known and most traded currency pairs are the 'majors'. This is a combination of the US dollar (USD) being traded against one of seven other major currencies: the Euro (EUR), British pound (GBP), Swiss franc (CHF), Japanese yen (JPY), Canadian dollar (CAD), Australian dollar (AUD), or New Zealand dollar (NZD). The four most popular currency pairs by volume are EUR/USD, USD/JPY, GBP/USD, and USD/CHF.
      </p>
      
      <p className="mb-4 text-left">
        Currency pairs outside that group – mainly those that do not involve the US dollar – are considered 'minors' or 'exotics'. These pairs can still have high value and significant trading volume, but it is typically less when compared with the majors.
      </p>
      
      <p className="mb-4 text-left">
        Note that there is no right or wrong currency pair to trade. While the majors are characterised by having the highest liquidity, the markets fluctuate in many ways, often because of economic news that is specific to a country or currency. As a result, this will be reflected in market pricing. Traders should therefore be in the habit of monitoring overall market conditions to find an opportunity that is best for them and their trading style and strategy.
      </p>
      
      <p className="mb-4 text-left">
        Additionally, traders should be aware that not all currencies are traded nonstop despite markets being open seven days a week. Allowances should also be made for local public holidays that can put a pause on trading. An economic calendar is useful for helping prepare for scheduled market closures, while live spread tables provide a concise rundown of current market pricing.
      </p>
      
      <h3 className="text-2xl mt-6 mb-4">Forex currency pairs comparison: Majors vs. Minors vs. Exotics</h3>
      
      <div className="overflow-x-auto mb-6">
        <Table className="min-w-full border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="border border-gray-300 px-4 py-2 bg-[#444444] text-white">Major currency pairs</TableHead>
              <TableHead className="border border-gray-300 px-4 py-2 bg-[#444444] text-white">Minor currency pairs</TableHead>
              <TableHead className="border border-gray-300 px-4 py-2 bg-[#444444] text-white">Exotic currency pairs</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border border-gray-300 px-4 py-2">EUR/USD</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">EUR/GBP</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">EUR/TRY</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-gray-300 px-4 py-2">USD/JPY</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">EUR/JPY</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">USD/HKD</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-gray-300 px-4 py-2">GBP/USD</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">GBP/JPY</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">USD/ZAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-gray-300 px-4 py-2">USD/CHF</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">GBP/CAD</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">JPY/NOK</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-gray-300 px-4 py-2">USD/CAD</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">CHF/JPY</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">NZD/SGD</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-gray-300 px-4 py-2">AUD/USD</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">EUR/AUD</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">GBP/ZAR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-gray-300 px-4 py-2">NZD/USD</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">NZD/JPY</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2">AUD/MXN</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ForexCurrencyPairs;
