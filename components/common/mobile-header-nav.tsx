import Link from "next/link";
import CTAButton from "./cta-button";

export const MobileHeaderNav = ({
  handleNavClick,
  closeMenu,
}: {
  handleNavClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
  closeMenu: () => void;
}) => {
  return (
    <>
      <nav className="flex flex-col space-y-4">
        <Link
          href="#about"
          onClick={(e) => handleNavClick(e, "#about")}
          className="text-lg text-primary font-semibold py-2 px-4 rounded-lg hover:bg-black/5 transition-colors"
        >
          About
        </Link>
        <Link
          href="#features"
          onClick={(e) => handleNavClick(e, "#features")}
          className="text-lg text-primary font-semibold py-2 px-4 rounded-lg hover:bg-black/5 transition-colors"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          onClick={(e) => handleNavClick(e, "#pricing")}
          className="text-lg text-primary font-semibold py-2 px-4 rounded-lg hover:bg-black/5 transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="#community"
          onClick={closeMenu}
          className="text-lg text-primary font-semibold py-2 px-4 rounded-lg hover:bg-black/5 transition-colors"
        >
          Community
        </Link>
      </nav>

      <div className="pt-4 border-t border-black/10">
        <CTAButton
          label="Get Started"
          url="/signup"
          color="default"
          customClass="text-primary w-full justify-center"
        />
      </div>
    </>
  );
};
