export interface NavItem {
  title: string
  href: string
  isActive?: boolean
  hasDropdown?: boolean
  children?: NavItem[]
} 