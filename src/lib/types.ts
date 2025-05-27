/**
 * Project-related types
 */
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  imageUrl: string
  images?: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  category: string
  status: ProjectStatus
  createdAt: Date
  updatedAt: Date
}

export type ProjectStatus = 'draft' | 'published' | 'archived'

export type ProjectCategory = 
  | 'Web Development'
  | 'Mobile App'
  | 'API Development'
  | 'UI/UX Design'

/**
 * Experience-related types
 */
export interface Experience {
  id: string
  company: string
  position: string
  description: string
  technologies: string[]
  startDate: Date
  endDate?: Date
  current: boolean
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
}

/**
 * Education-related types
 */
export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: Date
  endDate?: Date
  current: boolean
  gpa?: number
  description?: string
}

/**
 * Skill-related types
 */
export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: SkillLevel
  icon?: string
}

export type SkillCategory = 
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'DevOps'
  | 'Design'
  | 'Other'

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

/**
 * Contact form types
 */
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

/**
 * Theme-related types
 */
export type Theme = 'light' | 'dark' | 'system'

export interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

/**
 * Navigation types
 */
export interface NavItem {
  href: string
  label: string
  external?: boolean
}

/**
 * SEO types
 */
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

/**
 * API response types
 */
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

/**
 * Component prop types
 */
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'outline' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

/**
 * Animation types
 */
export interface AnimationProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
}

/**
 * Utility types
 */
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>

/**
 * Branded types for better type safety
 */
export type ProjectId = string & { readonly brand: unique symbol }
export type ExperienceId = string & { readonly brand: unique symbol }
export type SkillId = string & { readonly brand: unique symbol } 