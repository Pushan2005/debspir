import { Metadata } from "next";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import boxBG from "@/images/boxBG.png";

export const metadata: Metadata = {
  title: "Devsphere",
  description: "Open-Source and Web-3 focused club at RV University",
};

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="relative">
        <div>
          <Image
            src={boxBG}
            alt="background image"
            className="-z-1 absolute left-0 right-0 mx-auto"
          />
        </div>
        <div className="pt-13 z-10 flex w-full flex-col items-center">
          <h1 className="mt-20 max-w-5xl text-center text-6xl font-semibold leading-[5rem]">
            Open-Source and Blockchain fascinates us.
          </h1>
          <h1 className="max-w-5xl text-center text-6xl font-semibold leading-[5rem]">
            Imagine a community that can assist you with that.
          </h1>
          <h1 className="mb-8 mt-8 max-w-5xl text-center text-lg text-dark-text">
            idk what to write here lmao
          </h1>
          <div className="flex items-center">
            <Button className="mr-2 rounded-full bg-gradient-to-tr from-[#3082e2] to-[#5ba7ff] p-6 text-lg text-white">
              Join Community
            </Button>
            <Button
              variant="outline"
              className="ml-2  rounded-full border-white p-6 text-lg"
            >
              Watch Our Intro
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
