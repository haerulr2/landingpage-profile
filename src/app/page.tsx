"use client";

import { Button, Image, Input, Textarea } from "@heroui/react";
import NavbarComponent from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FooterComponent from "./components/FooterComponent";
import Reveal from "./components/RevealAnimation";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import { servicesList } from "@/lib/data/services";
import { projectsList } from "@/lib/data/projects";

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
      <section
        id="about"
        className={`flex flex-col md:flex-row gap-12 md:gap-0 justify-center bg-slate-100
        dark:bg-zinc-800 w-full py-20 px-3 lg:py-34 sm:pl-10 lg:pl-30`}>
        <Reveal>
          <div className="w-full sm:w-[410px] sm:pr-15">
            <h2 className="text-3xl font-semibold mb-3 text-black dark:text-white">
              Hi I&apos;m Haerul Fajar,
            </h2>
            <p className="text-base text-default-700 leading-[1.6]">
              And I love to create beautiful and efficient websites for my customers.
              I love going through the entire process with the customer from concept,
              to design and then development and launch
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-full sm:w-[410px] sm:pr-15">
            <div className="flex flex-col mb-6">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-500 font-[Poppins] mb-3">
                2019 - PRESENT
              </p>
              <p className="text-base text-black dark:text-white font-semibold font-[Poppins] mb-1">
                Freelance Web Developer
              </p>
              <p className="text-base text-default-700 font-[openSans]">
                Working happily on my own web projects
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-500 font-[Poppins] mb-3">
                2018 - 2019
              </p>
              <p className="text-base text-black dark:text-white font-semibold font-[Poppins] mb-1">
                Lead Web Developer
              </p>
              <p className="text-base text-default-700 font-[openSans]">
                Beautiful project for a major digital agency
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-full sm:w-[410px] sm:pr-15">
            <div className="flex flex-col mb-6">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-500 font-[Poppins] mb-3">
                2017 - 2018
              </p>
              <p className="text-base text-black dark:text-white font-semibold font-[Poppins] mb-1">
                Senior Web Designer
              </p>
              <p className="text-base text-default-700 font-[openSans]">
                Inhouse web designer for ecommerce firm
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-500 font-[Poppins] mb-3">
                2016 - 2017
              </p>
              <p className="text-base text-black dark:text-white font-semibold font-[Poppins] mb-1">
                Junior Web Designer
              </p>
              <p className="text-base text-default-700 font-[openSans]">
                Junior web designer for small web agency
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`flex flex-col items-center justify-center bg-white dark:bg-zinc-900 w-full py-20 px-3 lg:py-34`}>
        <Reveal>
          <div className="max-w-3xl text-center mb-15">
            <h2 className="text-3xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
              Offered services
            </h2>
            <p className="text-base text-default-700 font-[openSans]">
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
        <div className="h-[400px] sm:h-[500px] xl:h-full relative bg-[url('/images/details-background.jpg')] bg-cover bg-center">
          <div className="absolute top-0 left-0 bg-zinc-900/50 h-full w-full z-10"></div>
        </div>

        <div className="text-left px-3 lg:px-30 py-10 lg:py-30 h-full">
          <Reveal>
            <div className="flex flex-col mb-10">
              <h2 className="text-3xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
                Why Work With Me
              </h2>
              <p className="text-base text-default-700 font-[openSans]">
                I am a great communicator and love to invest the necessary
                time to understand the customer&apos;s problem very well
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col mb-10">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
                DESIGN TOOLS
              </h3>
              <p className="text-base text-default-700 font-[openSans]">
                I use Figma to design my projects and I&apos;m also familiar with
                Adobe Photoshop and Illustrator
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col mb-10">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
                DEVELOPMENT SKILLS
              </h3>
              <p className="text-base text-default-700 font-[openSans]">
                I am familiar and work on a daily basis with HTML, CSS,
                JavaScript, Bootstrap and other modern frameworks
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-row flex-wrap gap-5">
              <Image
                radius="none"
                src="/icons/photoshop.png"
                alt="photoshop"
                width={50}
                height={50}
                classNames={{
                  wrapper: "transition-all duration-300 hover:scale-110 hover:shadow-lg"
                }}
                className="shadow-md"
              />
              <Image
                radius="none"
                src="/icons/illustrator.png"
                alt="illustrator"
                width={50}
                height={50}
                classNames={{
                  wrapper: "transition-all duration-300 hover:scale-110 hover:shadow-lg"
                }}
                className="shadow-md"
              />
              <Image
                radius="none"
                src="/icons/html.png"
                alt="html"
                width={50}
                height={50}
                classNames={{
                  wrapper: "transition-all duration-300 hover:scale-110 hover:shadow-lg"
                }}
                className="shadow-md"
              />
              <Image
                radius="none"
                src="/icons/css.png"
                alt="css"
                width={50}
                height={50}
                classNames={{
                  wrapper: "transition-all duration-300 hover:scale-110 hover:shadow-lg"
                }}
                className="shadow-md"
              />
              <Image
                radius="none"
                src="/icons/javascript.png"
                alt="js"
                width={50}
                height={50}
                classNames={{
                  wrapper: "transition-all duration-300 hover:scale-110 hover:shadow-lg"
                }}
                className="shadow-md"
              />
              <Image
                radius="none"
                src="/icons/bootstrap.png"
                alt="bootstrap"
                width={50}
                height={50}
                classNames={{
                  wrapper: "transition-all duration-300 hover:scale-110 hover:shadow-lg"
                }}
                className="shadow-md"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`flex flex-col items-center justify-center bg-white dark:bg-zinc-900 w-full py-20 px-3 lg:py-34`}>
        <Reveal>
          <div className="w-full mb-15">
            <h2 className="text-3xl text-center font-semibold mb-3 text-black dark:text-white font-[Poppins]">
              My Projects
            </h2>
            <p className="max-w-3xl mx-auto text-center px-2 text-base text-default-700 font-[openSans]">
              Here are some of my projects that I have worked on. I specialize in
              creating modern, responsive websites and web applications using cutting-edge
              technologies like Next.js, React, and TypeScript. Each project showcases my expertise
              in both frontend and backend development, with a focus on user experience and performance.
            </p>
          </div>

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
            <h2 className="text-3xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
              Contact Me
            </h2>
            <p className="text-base text-default-700 font-[openSans]">
              For any type of online project please don&apos;t hesitate to get in touch with me.
              The fastest way is to send me your message using the following email contact@domain.com
            </p>
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
