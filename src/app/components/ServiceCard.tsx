import { Image } from "@heroui/react";
import Reveal from "./RevealAnimation";

export default function ServiceCard({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <Reveal>
      <div
        className="w-[350px] h-[335px] border-1 border-gray-300 dark:border-zinc-600 flex flex-col
      items-center justify-center p-10 shadow-md transition-all duration-300 hover:shadow-lg
      hover:translate-y-2 hover:scale-105"
      >
        <Image src={icon} alt="services-3" width={70} height={70} className="mb-5" />
        <p className="text-2xl text-black dark:text-white font-semibold font-[Poppins] mb-2">
          {title}
        </p>
        <p className="text-base text-default-700 font-[openSans]">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
