import React, { useState, useEffect } from "react";

// Type definitions
interface AnnotationPosition {
  x: number; // Percentage (0-100)
  y: number; // Percentage (0-100)
}

interface AnnotationData {
  id: string;
  label: string;
  position: AnnotationPosition;
  delay: number; // Animation delay in milliseconds
}

interface AnnotationProps {
  annotation: AnnotationData;
  isVisible: boolean;
  containerWidth: number;
  containerHeight: number;
}

interface AnnotationContainerProps {
  annotations: AnnotationData[];
  isActive: boolean;
  containerWidth: number;
  containerHeight: number;
}

// Individual Annotation Component
const Annotation: React.FC<AnnotationProps> = ({
  annotation,
  isVisible,
  containerWidth,
  containerHeight,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, annotation.delay);

      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
    }
  }, [isVisible, annotation.delay]);

  // Calculate absolute position from percentage
  const absoluteX = (annotation.position.x / 100) * containerWidth;
  const absoluteY = (annotation.position.y / 100) * containerHeight;

  return (
    <div
      className={`
        absolute pointer-events-none transition-all duration-500 ease-out
        ${
          shouldAnimate
            ? "opacity-100 scale-100 animate-sway"
            : "opacity-0 scale-0"
        }
      `}
      style={{
        left: `${absoluteX}px`,
        top: `${absoluteY}px`,
        transform: "translate(-50%, -50%)", // Center the annotation on the point
        zIndex: 20,
      }}
    >
      {/* Annotation Bubble */}
      <div className="relative">
        {/* Main bubble */}
        <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg border-2 border-orange-400">
          {annotation.label}
        </div>

        {/* Pointer/Arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-orange-500"></div>
        </div>

        {/* Dot indicator */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Container component that manages all annotations for a single item
const AnnotationContainer: React.FC<AnnotationContainerProps> = ({
  annotations,
  isActive,
  containerWidth,
  containerHeight,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {annotations.map((annotation) => (
        <Annotation
          key={annotation.id}
          annotation={annotation}
          isVisible={isActive}
          containerWidth={containerWidth}
          containerHeight={containerHeight}
        />
      ))}
    </div>
  );
};

// Demo component to showcase the annotation system
const AnnotationDemo: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  // Sample annotation data for different demo items
  const demoItems = [
    {
      id: 1,
      title: "Risk Management Interface",
      annotations: [
        {
          id: "risk-1",
          label: "AI generated idea",
          position: { x: 20, y: 25 },
          delay: 200,
        },
        {
          id: "risk-2",
          label: "Auto-risk calculation",
          position: { x: 75, y: 60 },
          delay: 400,
        },
        {
          id: "risk-3",
          label: "Potential PNL",
          position: { x: 50, y: 15 },
          delay: 600,
        },
      ] as AnnotationData[],
    },
    {
      id: 2,
      title: "Chart Analysis Interface",
      annotations: [
        {
          id: "chart-1",
          label: "AI Pattern Detection",
          position: { x: 60, y: 40 },
          delay: 200,
        },
        {
          id: "chart-2",
          label: "Support/Resistance",
          position: { x: 30, y: 70 },
          delay: 400,
        },
        {
          id: "chart-3",
          label: "Entry Signals",
          position: { x: 80, y: 25 },
          delay: 600,
        },
      ] as AnnotationData[],
    },
    {
      id: 3,
      title: "Real-time Alerts",
      annotations: [
        {
          id: "alert-1",
          label: "Price Alert Triggered",
          position: { x: 25, y: 30 },
          delay: 200,
        },
        {
          id: "alert-2",
          label: "Market Movement",
          position: { x: 70, y: 55 },
          delay: 400,
        },
      ] as AnnotationData[],
    },
  ];

  const containerWidth = 400;
  const containerHeight = 350;

  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-8">
        Annotation System Demo
      </h1>

      {/* Item Selector */}
      <div className="flex space-x-4 mb-8">
        {demoItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(index)}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-300
              ${
                index === activeItem
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }
            `}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Demo Container */}
      <div className="relative bg-slate-800 rounded-lg border border-gray-700 overflow-hidden">
        <div
          className="bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative"
          style={{ width: containerWidth, height: containerHeight }}
        >
          {/* Mock interface content */}
          <div className="text-gray-400 text-lg">
            {demoItems[activeItem].title}
          </div>

          {/* Mock interface elements */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="absolute top-4 right-4 w-16 h-6 bg-blue-500 rounded"></div>
          <div className="absolute bottom-4 left-4 w-24 h-4 bg-orange-500 rounded"></div>
          <div className="absolute bottom-4 right-4 w-20 h-8 bg-gray-600 rounded"></div>

          {/* Annotations */}
          <AnnotationContainer
            annotations={demoItems[activeItem].annotations}
            isActive={true}
            containerWidth={containerWidth}
            containerHeight={containerHeight}
          />
        </div>
      </div>

      {/* Debug Info */}
      <div className="mt-6 text-sm text-gray-400 text-center">
        <p>Active Item: {demoItems[activeItem].title}</p>
        <p>Annotations: {demoItems[activeItem].annotations.length}</p>
        <p>Click buttons above to see different annotation sets</p>
      </div>
    </div>
  );
};

export default AnnotationDemo;

// You can add the styles to your global CSS or use a style tag
