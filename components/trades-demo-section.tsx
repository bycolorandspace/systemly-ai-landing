import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import tradePlans from "@/data/dummy-trade-plan";
import Image from "next/image";
import AnalysisSummarisedAlt from "./trades/analysis-summarised-alt";

import { ChevronLeft, ChevronRight } from "lucide-react";

const TradesDemoSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  // Sample demo items
  const demoItems = [
    {
      id: 0,
      data: tradePlans[0],
      created_at: 19 + Math.floor(Math.random() * 11) + " days ago",
      accountCurrency: "USD",
      pnl: 250.75,
    },
    {
      id: 1,
      data: tradePlans[1],
      created_at: 10 + Math.floor(Math.random() * 6) + " days ago",
      accountCurrency: "USD",
      pnl: -120.5,
    },
    {
      id: 2,
      data: tradePlans[2],
      created_at: 5 + Math.floor(Math.random() * 4) + " days ago",
      accountCurrency: "USD",
      pnl: 75.0,
    },
    {
      id: 3,
      data: tradePlans[0],
      created_at: 19 + Math.floor(Math.random() * 11) + " days ago",
      accountCurrency: "USD",
      pnl: 250.75,
    },
    {
      id: 4,
      data: tradePlans[1],
      created_at: 10 + Math.floor(Math.random() * 6) + " days ago",
      accountCurrency: "USD",
      pnl: -120.5,
    },
  ];

  // Update selected index when carousel changes
  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi]);

  // Set up event listeners
  useEffect(() => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on("select", onSelect);

    return () => {
      emblaMainApi.off("select", onSelect);
    };
  }, [emblaMainApi, onSelect]);

  // Calculate if item should be blurred
  const getItemOpacity = (itemIndex: number) => {
    if (!emblaMainApi) return 1;

    // Get slides in view
    const slidesInView = emblaMainApi.slidesInView();
    const selectedSnap = emblaMainApi.selectedScrollSnap();

    // For 3-item view, center item is sharp, sides are blurred
    if (slidesInView.includes(itemIndex)) {
      const centerIndex = selectedSnap;
      return itemIndex === centerIndex ? 1 : 0.4;
    }

    return 0.4;
  };

  const getItemBlur = (itemIndex: number) => {
    if (!emblaMainApi) return "";

    const slidesInView = emblaMainApi.slidesInView();
    const selectedSnap = emblaMainApi.selectedScrollSnap();

    if (slidesInView.includes(itemIndex)) {
      const centerIndex = selectedSnap;
      return itemIndex === centerIndex ? "" : "blur-xs";
    }

    return "blur-xs";
  };

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-6xl gap-20 px-0 py-8 mt-10 min-h-screen">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-medium text-primary text-center">
          Generate Trade Ideas instantly
        </h2>
        <p className=" text-secondary text-center max-w-3xl">
          Get AI-generated trade ideas with full analysis, potential PnL,
          auto-calculated risk, and more.
        </p>
      </div>

      {/* Carousel Container */}
      <div className=" relative w-full max-w-6xl mx-auto">
        {/* Annotation Images */}
        <div className="hidden md:flex max-w-[400px] w-full left-[50%] ml-[-200px] absolute z-100 pointer-events-none h-[300px]">
          <Image
            src={"images/AI-generated-idea.svg"}
            width={170}
            height={50}
            alt="AI Generated Idea"
            className="absolute top-[-35px] left-[-40px]"
          />
          <Image
            src={"images/Potential-pnl.svg"}
            width={140}
            height={50}
            alt="Potential PnL"
            className="absolute top-[-32px] right-[-81px]"
          />
          <Image
            src={"images/Auto-risk-calculation.svg"}
            width={137}
            height={37}
            alt="Auto Risk Calculation"
            className="absolute top-[160px] right-[-110px]"
          />
          <Image
            src={"images/Full-analysis.svg"}
            width={115}
            height={55}
            alt="Full Analysis"
            className="absolute top-[200px] left-[-81px]"
          />
        </div>

        {/* Mobile View - Stack All Items */}
        <div className="flex md:hidden flex-col gap-6 justify-center items-center mx-4">
          {demoItems.map((trade, index) => (
            <div className="w-full max-w-[400px]" key={index}>
              <AnalysisSummarisedAlt
                key={trade.id}
                data={trade.data}
                created_at={trade.created_at}
                accountCurrency={trade.accountCurrency}
                pnl={trade.pnl}
              />
            </div>
          ))}
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:flex flex-col justify-center items-center w-full relative overflow-hidden">
          <div className="overflow-hidden" ref={emblaMainRef}>
            <div className="flex">
              {demoItems.map((trade, index) => (
                <div
                  key={index}
                  className={`flex-[0_0_33.333%] min-w-0 pl-4 transition-all duration-500 ${getItemBlur(
                    index
                  )}`}
                  style={{ opacity: getItemOpacity(index) }}
                >
                  <div className="w-full max-w-[400px] mx-auto">
                    <AnalysisSummarisedAlt
                      key={trade.id}
                      data={trade.data}
                      created_at={trade.created_at}
                      accountCurrency={trade.accountCurrency}
                      pnl={trade.pnl}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 w-full max-w-3xl mx-auto absolute">
            <button
              onClick={() => emblaMainApi?.scrollPrev()}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={() => emblaMainApi?.scrollNext()}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {demoItems.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaMainApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradesDemoSection;
