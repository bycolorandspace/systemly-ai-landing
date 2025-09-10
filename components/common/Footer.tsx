import Link from "next/link";
import Logo from "./logo";
import { PAGES } from "@/data/links";

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl px-4 py-8 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <Logo />
        <p className="text-sm text-primary mb-4 md:mb-0">
          © {new Date().getFullYear()} Systemly. All rights reserved.
        </p>

        <div className="flex flex-row items-center gap-4">
          <Link
            href={PAGES.privacy}
            className="text-sm text-secondary hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href={PAGES.terms}
            className="text-sm text-secondary hover:text-primary"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
