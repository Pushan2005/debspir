import Image from "next/image";
import Logo from "..//..//public/DebspirLogo.svg";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="hidden w-full flex-row justify-between bg-dark p-4 md:flex">
      <div className="ml-24 items-center">
        <Image src={Logo} alt="DevSphere Logo" height={40} />
      </div>
      <div className="mr-24 flex flex-row items-center justify-end space-x-12">
        <Link href="#">About</Link>
        <Link href="#">Team</Link>
        <Link href="#">Events</Link>
        <Link href="#">Contact</Link>
      </div>
    </div>
  );
}
