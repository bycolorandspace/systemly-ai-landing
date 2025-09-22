import React from "react";

const FluffySkyBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Sky blue gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, 
            #87CEEB 0%,     /* Sky blue at top */
            #B0E0E6 20%,    /* Powder blue */
            #E0F6FF 50%,    /* Very light blue */
            #F0F8FF 80%,    /* Alice blue */
            #FFFFFF 100%    /* White at bottom */
          )`,
        }}
      />

      {/* SVG Fluffy Clouds */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 -200 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Fluffy white cloud gradients */}
          <radialGradient id="fluffyWhite1" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="70%" stopColor="rgba(248, 250, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(240, 245, 255, 0.3)" />
          </radialGradient>

          <radialGradient id="fluffyWhite2" cx="40%" cy="50%" r="70%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.98)" />
            <stop offset="40%" stopColor="rgba(252, 254, 255, 0.9)" />
            <stop offset="80%" stopColor="rgba(245, 248, 255, 0.7)" />
            <stop offset="100%" stopColor="rgba(235, 240, 255, 0.2)" />
          </radialGradient>

          <radialGradient id="fluffyWhite3" cx="60%" cy="30%" r="65%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.96)" />
            <stop offset="35%" stopColor="rgba(250, 252, 255, 0.88)" />
            <stop offset="75%" stopColor="rgba(242, 246, 255, 0.65)" />
            <stop offset="100%" stopColor="rgba(230, 235, 250, 0.15)" />
          </radialGradient>

          <radialGradient id="fluffyWhite4" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.94)" />
            <stop offset="30%" stopColor="rgba(248, 250, 255, 0.85)" />
            <stop offset="70%" stopColor="rgba(240, 245, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(225, 235, 250, 0.1)" />
          </radialGradient>

          {/* Enhanced cloud filters for fluffiness */}
          <filter id="fluffyBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feColorMatrix type="saturate" values="1.1" />
          </filter>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feFlood flood-color="white" flood-opacity="0.3" result="glow" />
            <feComposite in="glow" in2="blur" operator="in" result="glowBlur" />
            <feMerge>
              <feMergeNode in="glowBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Large fluffy cumulus cloud */}
        <g style={{ animation: "gentleDrift 35s ease-in-out infinite" }}>
          <ellipse
            cx="150"
            cy="120"
            rx="90"
            ry="55"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.95"
          />
          <ellipse
            cx="220"
            cy="110"
            rx="75"
            ry="45"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.9"
          />
          <ellipse
            cx="190"
            cy="85"
            rx="60"
            ry="40"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="1"
          />
          <ellipse
            cx="250"
            cy="135"
            rx="55"
            ry="35"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.85"
          />
          <ellipse
            cx="120"
            cy="145"
            rx="65"
            ry="40"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.88"
          />
          <ellipse
            cx="280"
            cy="120"
            rx="45"
            ry="30"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.8"
          />
        </g>

        {/* Dreamy floating cloud */}
        <g style={{ animation: "floatSlow 28s ease-in-out infinite reverse" }}>
          <ellipse
            cx="700"
            cy="90"
            rx="100"
            ry="45"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.92"
          />
          <ellipse
            cx="780"
            cy="80"
            rx="80"
            ry="35"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.88"
          />
          <ellipse
            cx="740"
            cy="110"
            rx="70"
            ry="30"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.95"
          />
          <ellipse
            cx="820"
            cy="95"
            rx="50"
            ry="25"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.85"
          />
          <ellipse
            cx="680"
            cy="115"
            rx="60"
            ry="28"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.9"
          />
        </g>

        {/* Perfect puffy cloud */}
        <g style={{ animation: "bobGentle 22s ease-in-out infinite" }}>
          <ellipse
            cx="450"
            cy="180"
            rx="85"
            ry="60"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.96"
          />
          <ellipse
            cx="520"
            cy="165"
            rx="70"
            ry="50"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.93"
          />
          <ellipse
            cx="485"
            cy="135"
            rx="55"
            ry="40"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.98"
          />
          <ellipse
            cx="420"
            cy="200"
            rx="65"
            ry="45"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.9"
          />
          <ellipse
            cx="550"
            cy="190"
            rx="50"
            ry="35"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.87"
          />
          <ellipse
            cx="460"
            cy="210"
            rx="45"
            ry="30"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.85"
          />
        </g>

        {/* Wispy high cloud */}
        <g style={{ animation: "driftHigh 40s ease-in-out infinite reverse" }}>
          <ellipse
            cx="200"
            cy="50"
            rx="110"
            ry="30"
            fill="url(#fluffyWhite4)"
            filter="url(#fluffyBlur)"
            opacity="0.85"
          />
          <ellipse
            cx="280"
            cy="45"
            rx="90"
            ry="25"
            fill="url(#fluffyWhite4)"
            filter="url(#fluffyBlur)"
            opacity="0.9"
          />
          <ellipse
            cx="240"
            cy="60"
            rx="80"
            ry="22"
            fill="url(#fluffyWhite4)"
            filter="url(#fluffyBlur)"
            opacity="0.88"
          />
          <ellipse
            cx="320"
            cy="50"
            rx="60"
            ry="18"
            fill="url(#fluffyWhite4)"
            filter="url(#fluffyBlur)"
            opacity="0.82"
          />
        </g>

        {/* Cotton ball cluster */}
        <g style={{ animation: "gentleDrift 30s ease-in-out infinite" }}>
          <ellipse
            cx="850"
            cy="200"
            rx="75"
            ry="50"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.94"
          />
          <ellipse
            cx="910"
            cy="190"
            rx="60"
            ry="40"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.91"
          />
          <ellipse
            cx="880"
            cy="170"
            rx="50"
            ry="35"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.97"
          />
          <ellipse
            cx="820"
            cy="220"
            rx="55"
            ry="38"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.88"
          />
          <ellipse
            cx="940"
            cy="210"
            rx="45"
            ry="32"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.86"
          />
        </g>

        {/* Background fluffy mass */}
        <g style={{ animation: "driftHigh 45s ease-in-out infinite" }}>
          <ellipse
            cx="120"
            cy="320"
            rx="120"
            ry="70"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.8"
          />
          <ellipse
            cx="200"
            cy="305"
            rx="100"
            ry="60"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.85"
          />
          <ellipse
            cx="160"
            cy="280"
            rx="85"
            ry="55"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.9"
          />
          <ellipse
            cx="240"
            cy="330"
            rx="75"
            ry="50"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.78"
          />
          <ellipse
            cx="80"
            cy="340"
            rx="80"
            ry="45"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.82"
          />
        </g>

        {/* Small puffy clouds */}
        <g style={{ animation: "bobGentle 18s ease-in-out infinite reverse" }}>
          <ellipse
            cx="600"
            cy="70"
            rx="50"
            ry="30"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.9"
          />
          <ellipse
            cx="640"
            cy="65"
            rx="40"
            ry="25"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.95"
          />
          <ellipse
            cx="620"
            cy="80"
            rx="35"
            ry="22"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.92"
          />
        </g>

        {/* Distant cloud bank */}
        <g style={{ animation: "floatSlow 38s ease-in-out infinite" }}>
          <ellipse
            cx="1000"
            cy="280"
            rx="110"
            ry="50"
            fill="url(#fluffyWhite4)"
            filter="url(#softGlow)"
            opacity="0.75"
          />
          <ellipse
            cx="1080"
            cy="270"
            rx="90"
            ry="40"
            fill="url(#fluffyWhite4)"
            filter="url(#softGlow)"
            opacity="0.8"
          />
          <ellipse
            cx="1040"
            cy="250"
            rx="75"
            ry="35"
            fill="url(#fluffyWhite4)"
            filter="url(#softGlow)"
            opacity="0.85"
          />
          <ellipse
            cx="1120"
            cy="290"
            rx="65"
            ry="32"
            fill="url(#fluffyWhite4)"
            filter="url(#softGlow)"
            opacity="0.72"
          />
        </g>

        {/* Mid-level fluffy cloud */}
        <g
          style={{ animation: "gentleDrift 32s ease-in-out infinite reverse" }}
        >
          <ellipse
            cx="350"
            cy="350"
            rx="80"
            ry="55"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.88"
          />
          <ellipse
            cx="410"
            cy="340"
            rx="65"
            ry="45"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.92"
          />
          <ellipse
            cx="380"
            cy="320"
            rx="55"
            ry="38"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.95"
          />
          <ellipse
            cx="330"
            cy="370"
            rx="50"
            ry="35"
            fill="url(#fluffyWhite1)"
            filter="url(#softGlow)"
            opacity="0.85"
          />
        </g>

        {/* Delicate wisps */}
        <g style={{ animation: "floatSlow 25s ease-in-out infinite" }}>
          <ellipse
            cx="500"
            cy="30"
            rx="60"
            ry="18"
            fill="url(#fluffyWhite4)"
            filter="url(#fluffyBlur)"
            opacity="0.8"
          />
          <ellipse
            cx="540"
            cy="28"
            rx="45"
            ry="15"
            fill="url(#fluffyWhite4)"
            filter="url(#fluffyBlur)"
            opacity="0.85"
          />
          <ellipse
            cx="520"
            cy="35"
            rx="35"
            ry="12"
            fill="url(#fluffyWhite4)"
            filter="url(#fluffyBlur)"
            opacity="0.82"
          />
        </g>

        {/* Corner fluff */}
        <g style={{ animation: "bobGentle 27s ease-in-out infinite" }}>
          <ellipse
            cx="750"
            cy="350"
            rx="90"
            ry="60"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.86"
          />
          <ellipse
            cx="820"
            cy="335"
            rx="75"
            ry="50"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.9"
          />
          <ellipse
            cx="785"
            cy="315"
            rx="60"
            ry="42"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.93"
          />
          <ellipse
            cx="720"
            cy="375"
            rx="55"
            ry="38"
            fill="url(#fluffyWhite2)"
            filter="url(#softGlow)"
            opacity="0.83"
          />
        </g>

        {/* Tiny scattered puffs */}
        <g
          style={{ animation: "gentleDrift 20s ease-in-out infinite reverse" }}
        >
          <ellipse
            cx="300"
            cy="120"
            rx="35"
            ry="22"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.85"
          />
          <ellipse
            cx="380"
            cy="110"
            rx="30"
            ry="18"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.9"
          />
          <ellipse
            cx="420"
            cy="115"
            rx="25"
            ry="15"
            fill="url(#fluffyWhite3)"
            filter="url(#softGlow)"
            opacity="0.88"
          />
        </g>
      </svg>

      <style jsx>{`
        @keyframes gentleDrift {
          0%,
          100% {
            transform: translateX(-5px) translateY(0px);
          }
          25% {
            transform: translateX(3px) translateY(-3px);
          }
          50% {
            transform: translateX(8px) translateY(2px);
          }
          75% {
            transform: translateX(-2px) translateY(-4px);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateX(0px) translateY(-2px);
          }
          33% {
            transform: translateX(-6px) translateY(4px);
          }
          66% {
            transform: translateX(5px) translateY(-1px);
          }
        }

        @keyframes bobGentle {
          0%,
          100% {
            transform: translateX(2px) translateY(0px);
          }
          50% {
            transform: translateX(-4px) translateY(-5px);
          }
        }

        @keyframes driftHigh {
          0%,
          100% {
            transform: translateX(-3px) translateY(2px);
          }
          50% {
            transform: translateX(6px) translateY(-3px);
          }
        }
      `}</style>
    </div>
  );
};

export default FluffySkyBackground;
