import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:max-0">
      <Link
        href={"/work"}
        className="relative w-[150px] h-[150px] flex justify-center p-5 items-center bg-circleStar bg-cover bg-center bg-no-repeat group "
      >
        <Image
          src={"/rounded-text.png"}
          width={100}
          height={110}
          alt="Rounded-text.png"
          className="animate-spin-slow h-full w-full"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
