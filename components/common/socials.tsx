import {
  FaTiktok,
  FaLinkedin,
  FaInstagram,
  //   FaYoutube,
  //   FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { SOCIALS } from "../../data/links";

export default function Socials() {
  return (
    <div className="flex flex-row items-center gap-4">
      <Link
        href={SOCIALS.tiktok}
        target="_blank"
        className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
      >
        <FaTiktok className=" w-8 h-8 text-primary" />
      </Link>
      <Link
        href={SOCIALS.linkedIn}
        target="_blank"
        className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
      >
        <FaLinkedin className=" w-8 h-8 text-primary" />
      </Link>
      <Link
        href={SOCIALS.instagram}
        target="_blank"
        className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
      >
        <FaInstagram className=" w-8 h-8 text-primary" />
      </Link>
      <Link
        href={SOCIALS.X}
        target="_blank"
        className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
      >
        <FaXTwitter className=" w-8 h-8 text-primary" />
      </Link>
    </div>
  );
}
