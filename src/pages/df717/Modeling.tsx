
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LineChart, Network, Database } from "lucide-react";

const Modeling: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Financial Modeling"
          subtitle="How DF717 uses advanced modeling techniques to identify market opportunities"
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            DF717's proprietary financial modeling infrastructure combines deterministic and probabilistic approaches to 
            market analysis. Our models are continuously refined through machine learning and statistical validation processes 
            to ensure optimal performance across different market regimes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-200">
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <LineChart className="h-5 w-5 mr-3 text-red-400" />
                Time-Series Decomposition
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    Our algorithms decompose price action into trend, cyclical, and noise components using advanced mathematical 
                    techniques including wavelet transformations and spectral analysis. This allows us to isolate actionable 
                    trading signals from market noise with high precision.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Multi-resolution wavelet analysis</li>
                    <li>Non-linear trend extraction</li>
                    <li>Adaptive noise filtering</li>
                    <li>Statistical significance testing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Network className="h-5 w-5 mr-3 text-red-400" />
                Multi-factor Analysis
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    DF717 integrates data from multiple sources and timeframes to build a comprehensive market perspective. 
                    Our proprietary factor weighting system dynamically adjusts to changing market conditions, emphasizing 
                    factors with the highest predictive power for current conditions.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Dynamic factor weighting</li>
                    <li>Cross-timeframe signal confirmation</li>
                    <li>Correlation-aware feature selection</li>
                    <li>Regime-specific factor models</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Database className="h-5 w-5 mr-3 text-red-400" />
                Market Microstructure Analysis
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    Our systems analyze order flow, market depth, and liquidity patterns to identify short-term market inefficiencies. 
                    This high-frequency data processing capability provides an edge in execution timing and price discovery.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Order flow imbalance detection</li>
                    <li>Liquidity contour mapping</li>
                    <li>Price impact modeling</li>
                    <li>Execution probability forecasting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 p-4 border-t border-gray-800 animate-fade-in-up delay-300">
          <p className="text-amber-300 font-medium flex items-center">
            <span className="mr-2">⚠️</span>
            All modeling techniques and mathematical formulations are proprietary and continuously refined to maintain DF717's edge in the market.
          </p>
        </div>
      </div>
    </DF717Layout>
  );
};

export default Modeling;
