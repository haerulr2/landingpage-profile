import Image from "next/image";

export default function ProjectCard({ title, description, image, link, tags }: { title: string, description: string, image: string, link: string, tags: string[] }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[350px] h-[335px] border-1 border-gray-300 dark:border-zinc-600 flex flex-col
        items-center justify-center p-10 shadow-md transition-all duration-300 hover:shadow-lg
        hover:translate-y-2 hover:scale-105"
    >
      <Image src={image} alt={title} width={800} height={400} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-gray-900 dark:text-white font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 text-gray-900 dark:text-gray-400 bg-gray-200 dark:bg-zinc-700 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
