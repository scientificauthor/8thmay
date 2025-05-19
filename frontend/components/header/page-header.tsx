import { PageHeaderProps } from "@/types/page-header"

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col space-y-4 pb-4 ml-[26px]">
      <div className="flex items-center justify-between"> 
        <div>
          <h1 className="text-[48px] font-bold tracking-tight font-Roboto">{title}</h1>
          {subtitle && <p className="text-[24px] text-gray-700 font-bold ">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
