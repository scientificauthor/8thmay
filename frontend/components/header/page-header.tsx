import { PageHeaderProps } from "@/types/page-header"

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col space-y-4  px-4">
      <div className="flex items-center justify-between"> 
        <div>
          {/* Title: only visible on md and up */}
          <h1 className="font-bold tracking-tight font-Roboto text-[19px] md:text-[48px]">{title}</h1>
          {/* Subtitle: visible on all screens, but hidden on md+ if title exists */}
          {subtitle && (
            <>
              {/* On small screens, show subtitle */}
              <p className="text-[24px] text-gray-700 font-bold mt-1 md:hidden">{subtitle}</p>
              {/* On md+ screens, show subtitle only if title is not present */}
              <p className="text-[24px] text-gray-700 font-bold mt-1 hidden md:block">{subtitle}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
