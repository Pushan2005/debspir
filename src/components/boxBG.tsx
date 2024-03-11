import Image from "next/image";
import boxBG from "@/images/boxBG.png";

export default function BoxBG({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="flex w-full justify-center">
        <Image
          className="object-cover"
          src={boxBG}
          alt="background image"
          placeholder="blur"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        {children}
      </div>
    </div>
  );
}
