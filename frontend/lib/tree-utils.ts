// lib/tree-utils.ts
import { MenuItemProps } from "@/types/superadmin"

export function hasActiveDescendant(item: MenuItemProps["item"], pathname: string): boolean {
  if (item.href === pathname) return true
  if (!item.children) return false
  return item.children.some((child) => hasActiveDescendant(child, pathname))
}
