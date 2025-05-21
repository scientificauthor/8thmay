"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Sun, Moon } from "lucide-react"

import { cn } from "@/lib/utils"

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  isDarkMode?: boolean;
}

function Switch({
  className,
  isDarkMode,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0  items-center justify-center",
        )}
      >
        {isDarkMode ? (
          <Moon className="h-3 w-3 text-gray-700 dark:text-white" />
        ) : (
          <Sun className="h-3 w-3 text-gray-700 dark:text-white" />
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
