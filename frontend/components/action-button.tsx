import { Search, Copy, Save, Plus, Trash, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ActionButtons({
  customStyle,
  title,
  color,
}: {
  customStyle: string;
  title: string;
  color: string;
}) {
  return (
    <div className={`${customStyle} flex-1 px-0 md:px-4 pb-16`}>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline-none" size="icon">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="outline-none" size="sm" className="flex items-center">
          <Copy className="h-4 w-4 mr-1" />
          <span>Duplicate</span>
        </Button>
        <Button variant="outline-none" size="sm" className="flex items-center">
          <Save className="h-4 w-4 mr-1" />
          <span>Save</span>
        </Button>
        <Button
          variant="outline-none"
          size="sm"
          className="flex items-center text-blue-600"
        >
          <Plus className="h-4 w-4 mr-1" />
          <span>New</span>
        </Button>
        <Button
          variant="outline-none"
          size="sm"
          className="flex items-center text-red-600"
        >
          <Minus className="h-4 w-4 mr-1" />
          <span>Delete</span>
        </Button>
      </div>
      <div>
        <h1 className={`${color} text-md font-bold text-center`}>{title}</h1>
      </div>
    </div>
  );
}
