export interface MenuItem {
    title: string
    href?: string
    icon?: React.ReactNode
    children?: MenuItem[]
    isActive?: boolean
    isExpanded?: boolean
  }
  
export interface MenuItemProps {
    item: MenuItem
    level: number
    isExpanded?: boolean
  }