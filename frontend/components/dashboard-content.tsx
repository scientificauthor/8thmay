import { Sidebar } from "@/components/sidebar";
import { MainContent } from "@/components/main-content";

export function DashboardContent() {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">
          Super administrator dashboard
        </h1>
        <h2 className="text-lg md:text-xl text-muted-foreground mb-4">
          Web content management
        </h2>
      </div>
      <div className="flex justify-between">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
