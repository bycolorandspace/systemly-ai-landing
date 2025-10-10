import Link from "next/link";
import CTAButton from "./cta-button";
import { NAV } from "@/data/links";

export const HeaderNav = () => {
  return (
    <>
      <nav className="flex justify-center items-center gap-4">
        <Link
          href={NAV.about}
          // onClick={(e) => handleNavClick(e, NAV.about)}
          className="text-md text-primary font-semibold hover:text-primary/80 transition-colors space-grotesk-font"
        >
          About
        </Link>
        <Link
          href={NAV.features}
          // onClick={(e) => handleNavClick(e, NAV.features)}
          className="text-md text-primary font-semibold hover:text-primary/80 transition-colors space-grotesk-font"
        >
          Features
        </Link>
        <Link
          href={NAV.pricing}
          // onClick={(e) => handleNavClick(e, NAV.pricing)}
          className="text-md text-primary font-semibold hover:text-primary/80 transition-colors space-grotesk-font"
        >
          Pricing
        </Link>
        <Link
          href={NAV.community}
          className="text-md text-primary font-semibold hover:text-primary/80 transition-colors space-grotesk-font"
        >
          Community
        </Link>
      </nav>
      <CTAButton
        label="Get Started"
        url={NAV.getStarted}
        color="default"
        customClass="text-primary"
      />
    </>
  );
};
