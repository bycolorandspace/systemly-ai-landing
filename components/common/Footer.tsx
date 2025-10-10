import Link from "next/link";
import Logo from "./logo";
import { PAGES } from "@/data/links";
import { FOOTER_DISCLAIMER } from "@/data/site-copy";

export default function Footer() {
  return (
    <footer className="w-full max-w-5xl  mx-auto  px-4 py-8 text-left flex flex-col gap-2 justify-start items-start">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full max-w-7xl mx-auto   items-center  justify-between mb-8">
        <div className="flex flex-col md:flex-row  justify-start items-center gap-4  w-full">
          <Logo />
          <p className="text-sm text-primary mb-4 md:mb-0 text-left">
            © {new Date().getFullYear()} Systemly.ai . All rights reserved.
          </p>
        </div>

        <div className="flex flex-row justify-center md:justify-end gap-4  w-full ">
          <Link
            href={PAGES.privacy}
            className="text-sm text-primary hover:text-secondary"
          >
            Privacy Policy
          </Link>
          <Link
            href={PAGES.terms}
            className="text-sm text-primary hover:text-secondary"
          >
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="w-full max-w-7xl mb-20">
        <p className="text-sm text-secondary text-left">{FOOTER_DISCLAIMER}</p>
      </div>
    </footer>
  );
}
