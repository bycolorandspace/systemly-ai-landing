import { PAGES } from "@/data/links";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link
        href={PAGES.home}
        className="flex flex-row items-end justify-start gap-3 font-bold p-4 h-[50px]"
      >
        <Image
          src={"/images/systemly-logo.svg"}
          alt="Systemly Logo"
          width={60}
          height={50}
          className="object-contain"
        />
        <span className="text-primary text-xl ">Systemly</span>
      </Link>
    </div>
  );
}
