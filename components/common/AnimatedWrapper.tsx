import React, { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "slideInUp"
  | "slideInDown"
  | "slideInLeft"
  | "slideInRight"
  | "zoomIn"
  | "bounceIn"
  | "flipIn";

type AnimationProps = {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  easing?:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "bounce"
    | "spring";
  threshold?: number; // 0 to 1, how much of element should be visible before animating
  triggerOnce?: boolean; // animate only once or every time it enters viewport
  className?: string;
};

const AnimatedWrapper: React.FC<AnimationProps> = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
  easing = "ease-out",
  threshold = 0.1,
  triggerOnce = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        } else if (!triggerOnce && hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, triggerOnce, hasAnimated]);

  // Easing functions
  const easingMap = {
    linear: "linear",
    ease: "ease",
    "ease-in": "ease-in",
    "ease-out": "ease-out",
    "ease-in-out": "ease-in-out",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  // Animation configurations
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    fadeInUp: {
      initial: { opacity: 0, transform: "translateY(30px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
    fadeInDown: {
      initial: { opacity: 0, transform: "translateY(-30px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
    fadeInLeft: {
      initial: { opacity: 0, transform: "translateX(-30px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    fadeInRight: {
      initial: { opacity: 0, transform: "translateX(30px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    scaleIn: {
      initial: { opacity: 0, transform: "scale(0.9)" },
      animate: { opacity: 1, transform: "scale(1)" },
    },
    slideInUp: {
      initial: { transform: "translateY(100%)" },
      animate: { transform: "translateY(0)" },
    },
    slideInDown: {
      initial: { transform: "translateY(-100%)" },
      animate: { transform: "translateY(0)" },
    },
    slideInLeft: {
      initial: { transform: "translateX(-100%)" },
      animate: { transform: "translateX(0)" },
    },
    slideInRight: {
      initial: { transform: "translateX(100%)" },
      animate: { transform: "translateX(0)" },
    },
    zoomIn: {
      initial: { opacity: 0, transform: "scale(0.5)" },
      animate: { opacity: 1, transform: "scale(1)" },
    },
    bounceIn: {
      initial: { opacity: 0, transform: "scale(0.3)" },
      animate: { opacity: 1, transform: "scale(1)" },
    },
    flipIn: {
      initial: { opacity: 0, transform: "perspective(400px) rotateY(90deg)" },
      animate: { opacity: 1, transform: "perspective(400px) rotateY(0)" },
    },
  };

  const currentAnimation = animations[animation];
  const shouldAnimate = isVisible || hasAnimated;

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...(!shouldAnimate
          ? currentAnimation.initial
          : currentAnimation.animate),
        transition: `all ${duration}ms ${easingMap[easing]} ${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
