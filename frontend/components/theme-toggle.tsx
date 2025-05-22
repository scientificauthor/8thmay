"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Prevent hydration mismatch by not rendering anything until mounted
    if (!mounted) {
        return <div className="w-8 h-4" /> // Placeholder with same dimensions
    }

    return (
        <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            className="data-[state=checked]:bg-green-500"
            isDarkMode={theme === "dark"}
        />
    )
} 