import { type IconKeys } from '@/components/icons'

export interface SiteConfig {
  name: string
  author: string
  description: string
  keywords: string[]
  url: {
    base: string
    author: string
  }
  links: {
    github: string
  }
  ogImage: string
}

export type NavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: IconKeys
} & (
  | {
    href: string
    items?: never
  }
  | {
    href?: string
    items: NavLink[]
  }
)

export interface Navigation {
  data: NavItem[]
}

export interface ActivityEntry {
  name: string
  count: number | null
  color: string
}

export interface ActivityByDate {
  date: string
  count: number
}

export interface DateRange {
  from: Date
  to: Date
}

export interface SearchParams {
  from: string
  to: string
}
