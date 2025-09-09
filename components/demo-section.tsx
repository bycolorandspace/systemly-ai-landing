import React, { useState, useEffect, useRef } from "react";
import tradePlans from "@/data/dummy-trade-plan";
import Image from "next/image";
import AnalysisSummarisedAlt from "./trades/analysis-summarised-alt";

const DemoCarousel = () => {
  // State to track which item is currently active (centered)
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Refs to access DOM elements
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  //   const imageAnnotations: ImageAnnotation[] = [
  //     {
  //       id: "1",
  //       imageSrc: "/demo/trade-interface-1.png",
  //       altText: "AI generated trade plan",
  //       position: { x: 20, y: 30 },
  //       delay: 500,
  //       width: 300,
  //       height: 200,
  //     },
  //     {
  //       id: "2",
  //       imageSrc: "/demo/trade-interface-2.png",
  //       altText: "Trade Interface 2",
  //       position: { x: 70, y: 40 },
  //       delay: 1000,
  //       width: 300,
  //       height: 200,
  //     },
  //     {
  //       id: "3",
  //       imageSrc: "/demo/trade-interface-3.png",
  //       altText: "Trade Interface 3",
  //       position: { x: 50, y: 70 },
  //       delay: 1500,
  //       width: 300,
  //       height: 200,
  //     },
  //   ];

  // Sample demo items - you can replace with your actual trading interface components
  const demoItems = [
    {
      id: 0,
      data: tradePlans[0],
      //   Generate a random past date within the last 30 days
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
  ];

  // Function to start auto-scroll interval
  const startAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % demoItems.length;
          return nextIndex;
        });
      }
    }, 3000); // Change every 3 seconds
  };

  // Function to stop auto-scroll interval
  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Set up auto-scroll and viewport detection
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Section is in view - start auto-scroll
          startAutoScroll();
        } else {
          // Section is out of view - stop auto-scroll
          stopAutoScroll();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      observer.disconnect();
      stopAutoScroll();
    };
  }, [demoItems.length]);

  // Function to store refs for each item
  const setItemRef = (index: number) => (element: HTMLDivElement | null) => {
    itemRefs.current[index] = element;
  };

  // Handle manual navigation (dots and clicks) - resets timer
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    // Reset the auto-scroll timer to give user time to observe
    if (sectionRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Only restart if section is in view
      if (sectionRect.top <= viewportHeight && sectionRect.bottom >= 0) {
        startAutoScroll();
      }
    }
  };

  // Handle hover events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 min-h-screen"
    >
      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl overflow-visible">
        {/* The carousel track that holds all items */}

        <div className="flex max-w-[400px] w-full left-[50%] ml-[-200px] absolute z-100 pointer-events-none h-[300px]">
          <Image
            src={"images/AI-generated-idea.svg"}
            width={170}
            height={50}
            alt="kjfnf"
            className="absolute top-[-35px] left-[-40px]"
          />
          <Image
            src={"images/Potential-pnl.svg"}
            width={140}
            height={50}
            alt="kjfnf"
            className="absolute top-[-32px] right-[-81px]"
          />
          <Image
            src={"images/Auto-risk-calculation.svg"}
            width={137}
            height={37}
            alt="kjfnf"
            className="absolute top-[160px] right-[-110px]"
          />
          <Image
            src={"images/Full-analysis.svg"}
            width={115}
            height={55}
            alt="kjfnf"
            className="absolute top-[200px] left-[-81px]"
          />
        </div>

        <div
          className="flex items-center transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${(activeIndex + 0.5) * 400}px))`,
          }}
        >
          {demoItems.map((item, index) => (
            <div
              key={item.id}
              ref={setItemRef(index)}
              className="flex-shrink-0 px-4"
              style={{ width: "400px" }}
            >
              {/* Individual carousel item */}
              <div
                className={`
                  w-full h-[350px] transition-all duration-700 cursor-pointer relative
                  ${
                    index === activeIndex
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-30 scale-90 z-0"
                  }
                `}
                onClick={() => handleItemClick(index)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <AnalysisSummarisedAlt
                  key={item.id}
                  data={item.data}
                  created_at={item.created_at}
                  accountCurrency={item.accountCurrency}
                  pnl={item.pnl}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-4">
        {demoItems.map((_, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${
                index === activeIndex
                  ? "bg-accent scale-125"
                  : "bg-secondary hover:bg-secondary-foreground"
              }
            `}
          />
        ))}
      </div>

      {/* Debug info - remove this in production */}
      {/* <div className="mt-4 text-sm text-gray-400">
        Active Index: {activeIndex} | Auto-scroll:{" "}
        {isHovered ? "Paused (Hover)" : "Active"} | In View
      </div> */}
    </section>
  );
};

export default DemoCarousel;
