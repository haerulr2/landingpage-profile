'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@heroui/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ToggleThemes = () => {
  const { theme, setTheme } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    console.log(theme)
    setIsClient(true)
    // setTheme(theme === 'dark' ? 'light' : 'dark')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    isClient && (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          className="rounded-full hover:bg-blue-800 !transition-all !duration-500 dark:hover:bg-blue-800 dark:bg-default-700 bg-default-200"
          isIconOnly
          size="sm"
          color="primary"
          startContent={
            theme === 'dark' ? (
              <FontAwesomeIcon className="group-hover:text-white text-xl !transition-all !duration-500 text-blue-800" icon={faSun} />
            ) : (
              <FontAwesomeIcon className="group-hover:text-white text-xl !transition-all !duration-500 text-blue-800" icon={faMoon} />
            )
          }
          onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        ></Button>
      </motion.div>
    )
  )
}

export default ToggleThemes;