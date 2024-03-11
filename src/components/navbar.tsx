import Image from "next/image";
import Logo from "..//..//public/DebspirLogo.svg";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="hidden w-full flex-row justify-between bg-dark p-6 md:flex">
      <div className="ml-24 items-center">
        <Image src={Logo} alt="DevSphere Logo" height={40} />
      </div>
      <div className="mr-24 flex flex-row items-center justify-end space-x-[3.75rem] pr-4">
        <Link className="text-[1.13rem]" href="#">
          About
        </Link>
        <Link className="text-[1.13rem]" href="#">
          Team
        </Link>
        <Link className="text-[1.13rem]" href="#">
          Events
        </Link>
        <Link className="text-[1.13rem]" href="#">
          Contact
        </Link>
      </div>
    </div>
  );
}
