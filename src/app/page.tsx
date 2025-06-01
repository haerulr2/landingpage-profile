"use client";

import { Button, Input, Textarea } from "@heroui/react";
import NavbarComponent from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FooterComponent from "./components/FooterComponent";
import Reveal from "./components/RevealAnimation";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import { servicesList } from "@/lib/data/services";
import { projectsList } from "@/lib/data/projects";
import AboutCard from "./components/AboutCard";
import MyWork from "./components/MyWork";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <NavbarComponent />
      {/* Home Section */}
      <section
        id="home"
        className={`flex flex-col items-center justify-center min-h-screen
        w-full bg-[url('/images/header-background.jpg')] bg-cover bg-center`}>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-2xl sm:text-6xl font-bold p-5 sm:w-4/5 text-start sm:text-center mb-10">
            Welcome to my website.<br />I love to create beautiful and efficient websites
          </h1>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 w-full sm:w-auto px-5 sm:px-0">
            <Button
              radius="none"
              size="lg"
              variant="solid"
              className="text-white bg-blue-800 font-semibold px-10 py-5 border-1 border-blue-800 hover:!bg-zinc-900/30 hover:!border-white"
            >
              Discover
            </Button>
            <Button
              radius="none"
              size="lg"
              variant="light"
              color="primary"
              className="text-white hover:!bg-zinc-900/30 px-10 py-5 hover:text-white/60"
              startContent={<FontAwesomeIcon icon={faUser} />}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-100 dark:bg-zinc-800 w-full">
        <AboutCard />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`flex flex-col items-center justify-center bg-white dark:bg-zinc-900 w-full py-20 px-3 lg:py-34`}>
        <Reveal>
          <div className="max-w-5xl text-center mb-15">
            <h1 className="text-3xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
              Offered services
            </h1>
            <p className="text-base text-left md:text-center text-default-700 font-[openSans]">
              Web design and development have been my bread and butter for more than 5 years.
              During that time I&apos;ve discovered that I can help startups
              and companies with the following services
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* My Work Section */}
      <section
        id="my-work"
        className={`grid grid-cols-1 xl:grid-cols-2 bg-slate-100 dark:bg-zinc-800 w-full`}>
        <MyWork />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`flex flex-col items-center justify-center bg-white dark:bg-zinc-900 w-full py-20 px-3 lg:py-34`}>
        <Reveal>
          <div className="max-w-5xl text-center mb-15">
            <h1 className="text-3xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
              My Projects
            </h1>
            <p className="text-base text-left md:text-center text-default-700 font-[openSans]">
              Here&apos;s a selection of projects I&apos;ve built to sharpen my frontend skills and architect real-world user interfaces.
              Each project is crafted with clean code, scalable components, and a strong focus on performance and usability.
              From dashboards to dynamic web apps, these works reflect my approach to modern web development — practical, purposeful, and production-minded.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectsList.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`flex flex-col items-center justify-center bg-slate-100 dark:bg-zinc-800 w-full py-20 px-3 lg:py-34`}>
        <Reveal>
          <div className="max-w-3xl text-center mb-15">
            <h1 className="text-3xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
              Contact Me
            </h1>
            <p className="text-base text-left md:text-center text-default-700 font-[openSans]">
              For any type of online project please don&apos;t hesitate to get in touch with me.
              The fastest way is to send me your message using the following email contact@domain.com
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-base text-left md:text-center text-default-700 font-[openSans]">
                Let&apos;s build something together.
              </p>
              <p className="text-base text-left md:text-center text-default-700 font-[openSans]">
                If you&apos;re looking for a frontend developer who actually ships,
                reach me at: haerulfr7@gmail.com
                or connect via <a href="javascript:void(0)" className="text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>

              <p className="text-base text-left md:text-center text-default-700 font-[openSans]">
                Prefer GitHub? <a href="https://github.com/haerulr2" className="text-blue-500" target="_blank" rel="noopener noreferrer">haerulr2</a>
              </p>

            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5 max-w-3xl w-full">
          <Reveal>
            <Input
              label="Name"
              variant="bordered"
              radius="none"
              className="w-full"
              type="text"
              classNames={{
                inputWrapper: "border-1 border-gray-300 dark:border-zinc-600",
                input: "text-default-700",
                label: `text-default-800 group-data-[filled-within=true]:font-semibold text-default-800
                  group-data-[filled-within=true]:text-black group-data-[filled-within=true]:dark:text-white`,
              }}
            />
          </Reveal>

          <Reveal>
            <Input
              label="Email"
              size="md"
              radius="none"
              variant="bordered"
              type="email"
              classNames={{
                inputWrapper: "border-1 border-gray-300 dark:border-zinc-600",
                input: "text-default-700",
                label: `text-default-800 group-data-[filled-within=true]:font-semibold text-default-800
                  group-data-[filled-within=true]:text-black group-data-[filled-within=true]:dark:text-white`,
              }}
            />
          </Reveal>

          <Reveal>
            <Textarea
              label="Message"
              variant="bordered"
              radius="none"
              minRows={8}
              className="w-full"
              classNames={{
                inputWrapper: "border-1 border-gray-300 dark:border-zinc-600",
                input: "text-default-700",
                label: `text-default-800 group-data-[filled-within=true]:font-semibold text-default-800
                  group-data-[filled-within=true]:text-black group-data-[filled-within=true]:dark:text-white`,
              }}
            />
          </Reveal>

          <Reveal>
            <Button
              radius="full"
              size="lg"
              variant="solid"
              className="w-full bg-blue-800 text-white font-semibold shadow-md border-1 border-blue-800
                dark:text-white hover:dark:border-white !transition-all !duration-500 hover:scale-102
                hover:shadow-lg hover:bg-default-200/30 hover:text-blue-800"
            >
              Submit
            </Button>
          </Reveal>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
