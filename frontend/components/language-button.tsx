import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LanguageButton({customStyle}:{customStyle:string}) {
  return (
    <div className={`${customStyle} mb-8`}>
      <Button
        variant="outline"
        className="bg-transparent border-white text-white hover:bg-green-900 hover:border-green-900 transition-colors duration-200 flex items-center space-x-2 w-full sm:w-auto rounded-lg px-4 py-2"
      >
        <Globe className="h-5 w-5" />
        <span className="text-base">Turkish</span>
      </Button>
    </div>
  );
}
