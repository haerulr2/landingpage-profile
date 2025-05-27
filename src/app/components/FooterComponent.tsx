import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";

export default function FooterComponent() {
  return (
    <footer className="flex flex-col justify-center items-center pt-28 pb-10 bg-zinc-800 dark:bg-black">
      <div className="flex flex-row justify-center items-center gap-5 mb-15">
          <Button
            className="rounded-full bg-blue-800 border-1 border-blue-800 !transition-all !duration-500 hover:bg-default-200 hover:scale-110 hover:dark:border-white"
            isIconOnly
            size="lg"
            color="primary"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/heroui"
            startContent={
              <FontAwesomeIcon
                className="text-white text-xl transition-all duration-300 group-hover:text-blue-800 group-hover:dark:text-white"
                icon={faFacebookF}
              />}
          />

          <Button
            className="rounded-full bg-blue-800 border-1 border-blue-800 !transition-all !duration-500 hover:bg-default-200 hover:scale-110 hover:dark:border-white"
            isIconOnly
            size="lg"
            color="primary"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/heroui"
            startContent={
              <FontAwesomeIcon
                className="text-white text-xl transition-all duration-300 group-hover:text-blue-800 group-hover:dark:text-white"
                icon={faInstagram}
              />}
          />

          <Button
            className="rounded-full bg-blue-800 border-1 border-blue-800 !transition-all !duration-500 hover:bg-default-200 hover:scale-110 hover:dark:border-white"
            isIconOnly
            size="lg"
            color="primary"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/heroui"
            startContent={
              <FontAwesomeIcon
                className="text-white text-xl transition-all duration-300 group-hover:text-blue-800 group-hover:dark:text-white"
                icon={faLinkedin}
              />}
          />

          <Button
            className="rounded-full bg-blue-800 border-1 border-blue-800 !transition-all !duration-500 hover:bg-default-200 hover:scale-110 hover:dark:border-white"
            isIconOnly
            size="lg"
            color="primary"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com/heroui"
            startContent={
              <FontAwesomeIcon
                className="text-white text-xl transition-all duration-300 group-hover:text-blue-800 group-hover:dark:text-white"
                icon={faTwitter}
              />}
          />
      </div>
      <div className="flex flex-row justify-center items-center gap-5">
        <p className="text-default-400 text-sm">&copy; 2025 Haerul Fajar. All rights reserved.</p>
      </div>
    </footer>
  );
}
