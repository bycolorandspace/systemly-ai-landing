"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { scrollToSection } from "@/utils/smoothScroll";
import { HeaderNav } from "./header-nav";
import { MobileHeaderNav } from "./mobile-header-nav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToSection(href);
    closeMenu();
  };

  return (
    <>
      <header className="flex fixed z-50 w-full">
        <div
          className={`flex justify-between items-center w-full  max-w-5xl  py-2 px-4 mx-6 lg:mx-auto mt-8 backdrop-blur-md bg-white/20 ${
            isMenuOpen ? ` ` : `border border-black/10 rounded-2xl px-4`
          }`}
        >
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center gap-4">
            <HeaderNav />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-xs border-0 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col px-8 pt-30 pb-6 space-y-6">
            <MobileHeaderNav
              handleNavClick={handleNavClick}
              closeMenu={closeMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
}
