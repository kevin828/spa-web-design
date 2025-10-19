import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-background font-bold text-xl">R</span>
          </div>
          <span className="text-foreground font-semibold text-lg">Refine Lab</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground rounded-full px-6"
          >
            Contact Us
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground hover:text-primary"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
