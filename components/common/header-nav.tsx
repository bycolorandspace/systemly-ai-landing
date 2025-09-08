import Link from "next/link";
import CTAButton from "./cta-button";

export const HeaderNav = ({
  handleNavClick,
}: {
  handleNavClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}) => {
  return (
    <>
      <nav className="flex justify-center items-center gap-4">
        <Link
          href="#about"
          onClick={(e) => handleNavClick(e, "#about")}
          className="text-md text-primary font-semibold hover:text-primary/80 transition-colors"
        >
          About
        </Link>
        <Link
          href="#features"
          onClick={(e) => handleNavClick(e, "#features")}
          className="text-md text-primary font-semibold hover:text-primary/80 transition-colors"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          onClick={(e) => handleNavClick(e, "#pricing")}
          className="text-md text-primary font-semibold hover:text-primary/80 transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="#community"
          className="text-md text-primary font-semibold hover:text-primary/80 transition-colors"
        >
          Community
        </Link>
      </nav>
      <CTAButton
        label="Get Started"
        url="/signup"
        color="default"
        customClass="text-primary"
      />
    </>
  );
};
