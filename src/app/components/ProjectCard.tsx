import Image from "next/image";
import Reveal from "./RevealAnimation";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tech
}: {
  title: string,
  description: string,
  image: string,
  link: string,
  tech: string[]
}) {
  return (
    <Reveal>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-[350px] h-[335px] border-1 border-gray-300 dark:border-zinc-600 flex flex-col
          items-center justify-center p-10 shadow-md transition-all duration-300 hover:shadow-lg
          hover:translate-y-2 hover:scale-105"
      >
        <Image src={image} alt={title} fill className="w-full h-auto object-cover transition-all duration-300 opacity-0 group-hover:opacity-100" />
        <div className="p-4">
          <h3 className="text-xl text-gray-900 dark:text-white font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((tech, i) => (
              <span key={i} className="text-xs px-2 py-1 text-gray-900 dark:text-gray-400 bg-gray-200 dark:bg-zinc-700 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}
