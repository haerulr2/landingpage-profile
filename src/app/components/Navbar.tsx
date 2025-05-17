import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useState } from "react";
import ToggleThemes from "./ToggleThemes";
import { motion, AnimatePresence } from "framer-motion";

export const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        isBlurred={false}
        height={50}
        className={`${isScrolled ? "bg-zinc-800 dark:bg-black shadow-md":"pt-0 sm:pt-5 bg-zinc-800 sm:bg-transparent"} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        maxWidth="xl"
        isMenuOpen={isMenuOpen}
        classNames={{
          wrapper: "px-3",
        }}
        onScrollPositionChange={(e) => {
          setIsScrolled(e > 20);
        }}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Brand */}
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl text-white">Haerul Fajar</p>
        </NavbarBrand>

        {/* Mobile Menu Toggle */}
        <NavbarContent className="sm:hidden" justify="end">
          <div className="sm:hidden">
            <ToggleThemes />
          </div>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        {/* Desktop Menu */}
        <NavbarContent className="!hidden sm:!flex gap-5" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link className="font-semibold text-sm" color="foreground" href={item.href}>
                {item.label}
              </Link>

            </NavbarItem>
          ))}
          {/* Theme Toggle */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="static xl:fixed right-5 z-50"
              >
                <NavbarContent justify="end">
                  <ToggleThemes />
                </NavbarContent>
              </motion.div>
            )}
          </AnimatePresence>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu
          className="bg-zinc-900 pt-10 px-3 gap-3 items-center"
          >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-default-200 dark:text-default-700 font-semibold text-base"
                href={item.href}
                onPress={() => {
                  setIsMenuOpen(false);
                }}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* Footer Menu */}
          <div className="fixed bottom-0 left-0 right-0 flex flex-row justify-center gap-5 bg-zinc-800 dark:bg-black p-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                className="rounded-full bg-blue-800"
                isIconOnly
                size="sm"
                color="primary"
                startContent={<FontAwesomeIcon className="text-white text-xl" icon={faFacebookF} />}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                className="rounded-full bg-blue-800"
                isIconOnly
                size="sm"
                color="primary"
                startContent={<FontAwesomeIcon className="text-white text-xl" icon={faInstagram} />}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                className="rounded-full bg-blue-800"
                isIconOnly
                size="sm"
                color="primary"
                startContent={<FontAwesomeIcon className="text-white text-xl" icon={faLinkedin} />}
              />
            </motion.div>
          </div>
        </NavbarMenu>
      </Navbar>
{/* 
      <Navbar
        isBlurred={false}
        height={50}
        className={`fixed bg-zinc-800 sm:hidden top-0 left-0 right-0 z-50`}
        maxWidth="xl"
        isMenuOpen={isMenuOpen}
        classNames={{
          wrapper: "px-3",
        }}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl text-white">Haerul Fajar</p>
        </NavbarBrand>

        <NavbarContent className="sm:hidden flex-none" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarMenu className="bg-zinc-900">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar> */}
    </>
  )
}
