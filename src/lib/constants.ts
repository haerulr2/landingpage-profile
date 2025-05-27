/**
 * Breakpoint constants for responsive design
 */
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

/**
 * Animation duration constants
 */
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const

/**
 * Z-index constants for layering
 */
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070,
} as const

/**
 * Common spacing values
 */
export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
} as const

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:your.email@example.com',
} as const

/**
 * Site configuration
 */
export const SITE_CONFIG = {
  name: 'Your Portfolio',
  description: 'Full-stack developer specializing in React and Node.js',
  url: 'https://yourportfolio.com',
  author: 'Your Name',
  keywords: ['developer', 'react', 'nextjs', 'portfolio', 'typescript'],
} as const

/**
 * Navigation items
 */
export const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const

/**
 * Project categories
 */
export const PROJECT_CATEGORIES = [
  'All',
  'Web Development',
  'Mobile App',
  'API Development',
  'UI/UX Design',
] as const

/**
 * Technology stack
 */
export const TECH_STACK = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel'],
} as const 